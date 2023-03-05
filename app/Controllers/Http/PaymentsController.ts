import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Payment from 'App/Models/Payment';

export default class PaymentsController {
    
    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result =await Payment.findOrFail(id);
        return result;

    }
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var result =await Payment.all();
        return result;
        
    }
    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
       
        const newSchema = schema.create({
            transaction_id:schema.number(),
            payment_method_id:schema.number(),
            amount_paid:schema.number(),
            date_of_payment:schema.date(),
            check_number:schema.number(),
           

        });
        const fields = await ctx.request.validate({ schema: newSchema})
        
        var payment = new Payment();
        payment.transactionId = fields.transaction_id;
        payment.paymentMethodId = fields.payment_method_id;
        payment.amountPaid = fields.amount_paid;
        payment.dateOfPayment = fields.date_of_payment;
        payment.checkNumber = fields.check_number;
       
        var result = await payment.save();
        return result;
    
        
    }
    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var fields = ctx.request.all();
        var id = fields.id;
        var payment = await Payment.findOrFail(id); 
        payment.transactionId = fields.transaction_id;
        payment.paymentMethodId = fields.payment_method_id;
        payment.amountPaid = fields.amount_paid;
        payment.dateOfPayment = fields.date_of_payment;
        payment.checkNumber = fields.check_number;
       
        var result = await payment.save();
        return result;
    }
    public async destroy(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var payment = await Payment.findOrFail(id);
        await payment.delete();
        return { message: "The payment has been deleted!" };
    }

}
