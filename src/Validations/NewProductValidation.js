import * as yup from 'yup';

export const newProductSchema = yup.object().shape({
    id: yup.string().required(),
    name: yup.string().required(),
    stock: yup.number().required(),
    reference: yup.string().required(),
    description: yup.string().required(),
    image: yup.string(),
    price: yup.number().required().positive().integer(),
    brand: yup.string().required(),
    category: yup.string().required()
})