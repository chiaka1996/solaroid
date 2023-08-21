import  {Schema, model, models} from 'mongoose';

const productSchema = new Schema({
    productImage: {
        type: String,
        required: true
    },

    productName: {
        type: String,
        required: true
    },

    productDescription: {
        type: String,
        required: true
    },

    productCategory: {
        type: String,
        required: true
    },

    productPrice: {
        type: String,
        required: true
    },

    productQualities: {
        type: String
    },

    availableQuantity: {
        type: String,
        required: true
    },

    cloudinaryId: {
        type: String
    }

});

const products_profile = models.products ||  model('products', productSchema);

export default products_profile;