import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productService.findProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: number): Promise<Product> {
    return this.productService.findProductById(id);
  }

  @Post()
  async createProduct(@Body() newProductData: Product): Promise<Product> {
    return this.productService.insertProduct(newProductData);
  }

  @Patch(':id')
  async updateProduct(
    @Param('id') id: number,
    @Body() newProductData: Product,
  ): Promise<Product> {
    await this.getProductById(id);

    return this.productService.editProduct(id, newProductData);
  }

  @Delete(':id')
  async deleteProductById(@Param('id') id: number): Promise<any> {
    await this.getProductById(id);
    
    return this.productService.deleteProduct(id);
  }
}
