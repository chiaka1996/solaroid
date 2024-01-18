import {Schema, model, models} from 'mongoose';

const purchasedProductSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    purchase: {
        type: Array,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    }
)

const Purchases = models.purchase || model('purchase', purchasedProductSchema);
export default Purchases;
