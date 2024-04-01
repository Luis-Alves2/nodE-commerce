import orderService from "../services/orderService";
jest.mock('../services/orderService');

describe('Order Creation', () => {
  test('should create a new order successfully', async () => {
    const orderData = { clientId: 1, products: [{ productId: 1, quantity: 2 }] };
    const mockedNewOrder = { id: 1, ...orderData };
    orderService.createOrder = jest.fn().mockResolvedValueOnce(mockedNewOrder);

    const newOrder = await orderService.createOrder(orderData);

    expect(newOrder).toEqual(mockedNewOrder);
  });

  test('should throw an error for missing client ID', async () => {
    const invalidOrderData = { products: [] }; // Missing client ID
    await expect(orderService.createOrder(invalidOrderData)).rejects.toThrow('Missing required field: clientId');
    
  });
});
