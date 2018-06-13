module.exports = {

    getCategory: (req, res) => {
        const db = req.app.get('db');
        const category = req.params.category;

        db.event_to_cat_join([ category ])
        .then(events => res.status(200).send(events))    
        .catch((err) => {
        console.log(err)
        res.status(500).send(err);
        })
    }


}
