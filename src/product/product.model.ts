import { Prisma } from "@prisma/client";

export class Product implements Prisma.ProductCreateInput{
    name: string; 
    description: string;
    price: number; 
    image: string;
}