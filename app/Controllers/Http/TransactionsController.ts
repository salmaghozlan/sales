import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Transaction from 'App/Models/Transaction';

export default class TransactionsController {
    
  public async getById(ctx: HttpContextContract) {
    var object = await ctx.auth.authenticate();
    var id = ctx.params.id;
    var result = await Transaction.findOrFail(id);
    return result;

  }
  public async getAll(ctx: HttpContextContract) {
    var object = await ctx.auth.authenticate();
    console.log(object);
    var result = await Transaction.all();
    return result;

  }
  public async create(ctx: HttpContextContract) {
    var object = await ctx.auth.authenticate();

    const newSchema = schema.create({
      type: schema.string(),
      amount: schema.number(),
      status: schema.string(),
      customer_id: schema.number(),
      driver_id: schema.number(),
      order_id: schema.number(),
      payment_method_id: schema.number(),


    });
    const fields = await ctx.request.validate({ schema: newSchema })

    var transaction= new Transaction();
    transaction.type = fields.type;
    transaction.amount = fields.amount;
    transaction.status = fields.status;
    transaction.customerId = fields.customer_id;
    transaction.driverId = fields.driver_id;
    transaction.orderId = fields.driver_id;
    transaction.paymentMethodId = fields.payment_method_id;

    
    var result = await transaction.save();
    return result;


  }
  public async update(ctx: HttpContextContract) {
    var object = await ctx.auth.authenticate();
    var fields = ctx.request.all();
    var id = fields.id;
    var transaction = await Transaction.findOrFail(id);
    transaction.type = fields.type;
    transaction.amount = fields.amount;
    transaction.status = fields.status;
    transaction.customerId = fields.customer_id;
    transaction.driverId = fields.driver_id;
    transaction.orderId = fields.driver_id;
    transaction.paymentMethodId = fields.payment_method_id;

    var result = await transaction.save();
    return result;
  }
  public async destroy(ctx: HttpContextContract) {
    var id = ctx.params.id;
    var transaction = await Transaction.findOrFail(id);
    await transaction.delete();
    return { message: "The transaction has been deleted!" };
  }
}
