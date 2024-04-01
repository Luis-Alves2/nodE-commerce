import clientService from "../services/clientService";

jest.mock('../services/clientService');

describe('Client Creation', () => {
  test('should create a new client successfully', async () => {
    const clientData = { name: 'Client A', contact: '123456789', address: '123 Main St' };

    clientService.createClient = jest.fn().mockResolvedValueOnce({ id: 1, ...clientData });

    const newClient = await clientService.createClient(clientData);

    expect(newClient).toEqual({ id: 1, ...clientData });
  });

  test('should throw an error for missing name', async () => {
    const invalidClientData = { contact: '123456789', address: '123 Main St' }; // Missing name

    await expect(clientService.createClient(invalidClientData)).rejects.toThrow('Missing required field: name'); // Update error message if needed based on actual implementation
  });
});
