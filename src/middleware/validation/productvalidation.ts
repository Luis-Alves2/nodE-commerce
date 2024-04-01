import * as yup from 'yup';

const updateProductSchema = yup.object().shape({
    name: yup.string(),
    description: yup.string(),
    price: yup.number().positive(),
    quantityInStock: yup.number().integer().positive(),
});

const createProductSchema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required().positive(),
    quantityInStock: yup.number().required().integer().positive(),
});

export { createProductSchema, updateProductSchema };
