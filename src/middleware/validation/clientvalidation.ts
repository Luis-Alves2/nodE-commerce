import * as yup from 'yup';

const updateClientSchema = yup.object().shape({
    fullName: yup.string(),
    contact: yup.string(),
    address: yup.string(),
    status: yup.boolean(),
});
const createClientSchema = yup.object().shape({
    fullName: yup.string().required(),
    contact: yup.string().required(),
    address: yup.string().required(),
    status: yup.boolean().required(),
});

export { createClientSchema, updateClientSchema };
