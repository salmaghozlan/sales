import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Coupon from 'App/Models/Coupon';

export default class CouponsController {
    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result =await Coupon.findOrFail(id);
        return result;

    }
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var result =await Coupon.all();
        return result;
        
    }
    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
       
        const newSchema = schema.create({
            coupon_code: schema.string(),
            discount_amount : schema.number(),
            expiration_date : schema.date(),
        });
        const fields = await ctx.request.validate({ schema: newSchema})
        
        var coupon = new Coupon();
        coupon.couponCode = fields.coupon_code;
        coupon.discountAmount = fields.discount_amount;
        coupon.expirationDate = fields.expiration_date;
        var result = await coupon.save();
        return result;
    
        
    }
    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var fields = ctx.request.all();
        var id = fields.id;
        var coupon = await Coupon.findOrFail(id);
        coupon.couponCode = fields.coupon_code;
        coupon.discountAmount = fields.discount_amount;
        coupon.expirationDate = fields.expiration_date;   
        var result = await coupon.save();
        return result;
    }
    public async destroy(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var coupon = await Coupon.findOrFail(id);
        await coupon.delete();
        return { message: "The coupon has been deleted!" };
    }
}
