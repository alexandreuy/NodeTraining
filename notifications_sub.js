const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema({
    notifications_subscription_id: { type : Number, required : true},
    read_at: {type: Date, required : true},
    send_at: {type: Date, required : true},
    alert : {
        id: {type : Number, required : true},
        type : {type : String, required : true},
        content : {type : String, required : true},
    },
    sender: {
        id : {type : Number, required : true},
        firstname : {type : String, required : true},
        lastname : {type : String, required : true},
        
    }, 
    reader: {
        id: {type : Number, required : true},
        firstname: {type : String, required : true},
        lastname: {type : String, required : true}
    },
    trigger: {
        slug: {type : String, required : true},
        triggered_at: {type: Date, required : true},
        url : {type : String, required : true},
        created_at : {type: Date, required : true},
    }


});

module.exports = mongoose.model('Notification', notificationSchema);