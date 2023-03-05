import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Brand from 'App/Models/Brand';
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class BrandsController {    
    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result =await Brand.findOrFail(id);

        return result;

    }
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var result =await Brand.all();

        return result;
        
    }
    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const newSchema = schema.create({
            name: schema.string(),
            
        });
        const fields = await ctx.request.validate({ schema: newSchema})
        
        var brand = new Brand();
        brand.name = fields.name;
        var result = await brand.save();
        return result;
    
        
    }
    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var fields = ctx.request.all();
        var id = fields.id;
        var brand = await Brand.findOrFail(id);
        brand.name = fields.name;   
        var result = await brand.save();
        return result;
    }
    public async destroy(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var brand = await Brand.findOrFail(id);
        await brand.delete();
        return { message: "The brand has been deleted!" };
    }
}
