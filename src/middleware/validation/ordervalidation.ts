import * as yup from 'yup';

const updateOrderSchema = yup.object().shape({
    clientId: yup.number().integer().positive(),
    status: yup.string(),
    orderDate: yup.date(),
    totalAmount: yup.number().positive(),
});

const createOrderSchema = yup.object().shape({
    clientId: yup.number().required().integer().positive(),
    status: yup.string().required(),
    orderDate: yup.date().required(),
    totalAmount: yup.number().required().positive(),
});


export { createOrderSchema, updateOrderSchema };
