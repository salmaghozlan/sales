import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Product from 'App/Models/Product';

export default class ProductsController {

  public async getById(ctx: HttpContextContract) {
    var object = await ctx.auth.authenticate();
    var id = ctx.params.id;
    var result = await Product.findOrFail(id);
    return result;

  }
  public async getAll(ctx: HttpContextContract) {
    var object = await ctx.auth.authenticate();
    console.log(object);
    var result = await Product.all();
    return result;

  }
  public async create(ctx: HttpContextContract) {
    var object = await ctx.auth.authenticate();

    const newSchema = schema.create({
      brand_id: schema.number(),
      coupon_id: schema.number(),
      categories_id: schema.number(),
      name: schema.string(),
      price: schema.number(),
      quantity: schema.number(),


    });
    const fields = await ctx.request.validate({ schema: newSchema })

    var product = new Product();
    product.brandId = fields.brand_id;
    product.couponId = fields.coupon_id;
    product.categoriesId = fields.categories_id;
    product.name = fields.name;
    product.price = fields.price;
    product.quantity = fields.quantity;
    var result = await product.save();
    return result;


  }
  public async update(ctx: HttpContextContract) {
    var object = await ctx.auth.authenticate();
    var fields = ctx.request.all();
    var id = fields.id;
    var product = await Product.findOrFail(id);
    product.brandId = fields.brand_id;
    product.couponId = fields.coupon_id;
    product.categoriesId = fields.categories_id;
    product.name = fields.name;
    product.price = fields.price;
    product.quantity = fields.quantity;

    var result = await product.save();
    return result;
  }
  public async destroy(ctx: HttpContextContract) {
    var id = ctx.params.id;
    var product = await Product.findOrFail(id);
    await product.delete();
    return { message: "The product has been deleted!" };
  }
}
