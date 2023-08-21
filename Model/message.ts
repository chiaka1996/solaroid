import  {Schema, model, models} from 'mongoose';

const messageSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    subject: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    }

});

const Messages = models.message ||  model('message', messageSchema);

export default Messages;