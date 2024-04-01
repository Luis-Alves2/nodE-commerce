import * as yup from 'yup';

const createUserSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(6),
    type: yup.string().required().oneOf(['USER', 'ADMIN']),
});

const updateUserSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email(),
    password: yup.string().min(6),
    type: yup.string().oneOf(['USER', 'ADMIN']),
});

export { createUserSchema, updateUserSchema };
