require('dotenv').config({path:'./../.env'});

const express = require('express')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , massive = require('massive')

    // -------------------------------------------------

const {
    SERVER_PORT,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL, // has to be authorized auth0.com
    CONNECTION_STRING
} = process.env;

const app = express();

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})
// return promise objects

// MIDDLEWARE (ORDER IS IMPORTANT)

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session()); // session store will store information for every single session (SID & any other info)

//set a strategy to use
passport.use(new Auth0Strategy ({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile' // we want profile info back
}, (accessToken, refreshToken, extraParams, profile, done) => {
    // done(null, profile);
    const db = app.get('db') // place where we store our db connexion /get value from db
    let {id, displayName, picture } = profile;
    console.log(profile)
    db.find_user([id]).then(user => {
        if (user[0]) {
            done(null, user[0].id)
        } else {
            db.create_user([displayName, picture, id]).then(createduser => {
            done(null, createduser[0].id)
            })
        }
    })
}))
// [displayName > user_name, picture > picture, id > auth_id] named this way bc Google call it this way (verified info with Debugger on VSCode)

passport.serializeUser((primaryKeyid, done) => {
    done(null, primaryKeyid);
})

passport.deserializeUser((primaryKeyid, done) => {
    app.get('db').find_session_user([primaryKeyid]).then(user => {done(null, user[0]);
    })
    // done(null, id); 
    // runs each time after the user is logged in 
})  // everything is stored on req.user

// ENDPOINTS
app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/login'
}))

app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect("http://locahost:3000")
})

app.get('/auth/user', (req, res) => {
    if (req.user) {
        res.status(200).send(req.user);
    } else {
        res.status(401).send('Nice try!')
    }
})


// -------------------------------------------------

app.listen(SERVER_PORT, () => {
    console.log(`Glittering on port :`, SERVER_PORT)
})