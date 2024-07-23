import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async findProducts(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async findProductById(id: number): Promise<Product> {
    const product = await this.prisma.product.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!product) {
        throw new NotFoundException("Product not found");
    }

    return product;
  }

  async insertProduct(productData: Product): Promise<Product> {
    return this.prisma.product.create({
      data: productData,
    });
  }

  async editProduct(id: number, productData: Product): Promise<Product> {
    return this.prisma.product.update({
        where: {
            id: Number(id),
        },
        data: {
            name: productData.name,
            description: productData.description,
            price: productData.price,
            image: productData.image
        }
    })
  }

  async deleteProduct(id: number): Promise<any> {
    await this.prisma.product.delete({
      where: {
        id: Number(id),
      },
    });

    return { "message": "Product deleted" }
  }
}
