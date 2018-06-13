module.exports = {

    getCategory: (req, res) => {
        const db = req.app.get('db');
        const category = req.params.category;

        db.get_category([category])
            .then(category => res.status(200).send(category))
            .catch((err) => {
                console.log(err)
                res.status(500).send(err);
            })
    },

    getEvent: (req, res) => {
        const db = req.app.get('db');
        const id = req.params.id;

        db.get_event([id])
            .then(event => res.status(200).send(event))
            .catch((err) => {
                console.log(err)
                res.status(500).send(err);
            })
    },

    deletePost: (req, res) => {
        const db = req.app.get('db');
        const id = req.params.id;

        db.delete_event([id])
            .then(event => res.status(200).send(event))
            .catch((err) => res.status(500).send(err))
    },

}
