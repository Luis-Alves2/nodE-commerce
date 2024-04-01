import * as yup from 'yup';

const updateOrderItemSchema = yup.object().shape({
    orderId: yup.number().integer().positive(),
    productId: yup.number().integer().positive(),
    quantity: yup.number().integer().positive(),
    unitPrice: yup.number().positive(),
    subtotal: yup.number().positive(),
});

const createOrderItemSchema = yup.object().shape({
    orderId: yup.number().required().integer().positive(),
    productId: yup.number().required().integer().positive(),
    quantity: yup.number().required().integer().positive(),
    unitPrice: yup.number().required().positive(),
    subtotal: yup.number().required().positive(),
});

export { createOrderItemSchema, updateOrderItemSchema };
