const express = require('express');
const Notification = require('../notifications_sub');
const db = require('../db');

const router = express.Router();

router.post('/', (req, res, next) => {
    const notification = new Notification({
        notifications_subscription_id: 1,
        read_at: "2021-10-10 14:23",
        send_at: "2021-10-10 14:23",
        alert : {
            id: 2,
            type : "email", 
            content : "Mark Zuckerberg a ajouté un document..."
        },
        sender: {
            id : 1,
            firstname : "Mark",
            lastname : "Zuckerberg",
     
        }, 
        reader: {
            id: 2,
            firstname: "John",
            lastname: "Doe"
        },
        trigger: {
            slug: "add_document",
            triggered_at: "2021-10-10 14:23",
            url : "https://edu-sante/library/doc=4" ,
            created_at : "2021-10-10 14:22"
        }
 
    });
    notification.save()    
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));

});


router.get('/', (req, res, next) => {
    Notification.find()
    .then(notifications => res.status(200).json(notifications))
    .catch(error => res.status(400).json({ error }));
});


router.get('/:id', (req, res, next) => {
    Notification.findOne({ title: req.params.id })
      .then(notifications => res.status(200).json(notifications.notifications_subscription_id))
      .catch(error => res.status(404).json({ error }));
});



module.exports = router;
