import * as yup from 'yup';

export const userValidationSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(12).required()
})