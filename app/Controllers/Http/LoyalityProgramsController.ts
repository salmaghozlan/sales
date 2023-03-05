import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import LoyalityProgram from 'App/Models/LoyalityProgram';

export default class LoyalityProgramsController {

    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result =await LoyalityProgram.findOrFail(id);
        return result;

    }
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var result =await LoyalityProgram.all();
        return result;
        
    }
    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
       
        const newSchema = schema.create({
            customer_id:schema.number(),
            points_balance:schema.number(),
            rewardsAvailable:schema.number(),

        });
        const fields = await ctx.request.validate({ schema: newSchema})
        
        var loyalityProgram = new LoyalityProgram();
        loyalityProgram.customer_id = fields.customer_id;
        loyalityProgram.pointsBalance = fields.points_balance;
        loyalityProgram.rewardsAvailable = fields.rewardsAvailable;
       
        var result = await loyalityProgram.save();
        return result;
    
        
    }
    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var fields = ctx.request.all();
        var id = fields.id;
        var loyalityProgram = await LoyalityProgram.findOrFail(id);
        loyalityProgram.customer_id = fields.customer_id;
        loyalityProgram.pointsBalance = fields.points_balance;
        loyalityProgram.rewardsAvailable = fields.rewardsAvailable;
        var result = await loyalityProgram.save();
        return result;
    }
    public async destroy(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var loyalityProgram = await LoyalityProgram.findOrFail(id);
        await loyalityProgram.delete();
        return { message: "The loyality program has been deleted!" };
    }

}
