import * as yup from 'yup';

export const newProductSchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required().positive().integer(),
    brand: yup.string().required(),
    category: yup.string().required()
})