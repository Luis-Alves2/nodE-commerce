import { Request, Response } from 'express';
import productService from '../services/productService';

import { createProductSchema, updateProductSchema } from '../middleware/validation/productvalidation'


class ProductController {
  async getAllProducts(req: Request, res: Response) {
    try {
      const products = await productService.getAllProducts();
      res.json(products);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
  }

  async getProductById(req: Request, res: Response) {
    const productId = parseInt(req.params.id);
    try {
      const product = await productService.getProductById(productId);
      res.json(product);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
  }

  async createProduct(req: Request, res: Response) {
    const data = req.body;
    try {
      await createProductSchema.validate(data);
      const newProduct = await productService.createProduct(data);
      res.status(201).json(newProduct);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
  }

  async updateProduct(req: Request, res: Response) {
    const productId = parseInt(req.params.id);
    const data = req.body;
    try {
      await updateProductSchema.validate(data);
      const updatedProduct = await productService.updateProduct(productId, data);
      res.json(updatedProduct);
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
  }

  async deleteProduct(req: Request, res: Response) {
    const productId = parseInt(req.params.id);
    try {
      await productService.deleteProduct(productId);
      res.status(204).end();
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).json({ message: errorMessage });
    }
  }
}

export default new ProductController();
