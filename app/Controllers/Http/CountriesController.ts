import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Country from 'App/Models/Country';

export default class CountriesController {
    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result =await Country.findOrFail(id);
        return result;

    }
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var result =await Country.all();
        return result;
        
    }
    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
       
        const newSchema = schema.create({
            name: schema.string(),
            
        });
        const fields = await ctx.request.validate({ schema: newSchema})
        
        var country = new Country();
        country.name = fields.name;
        var result = await country.save();
        return result;
    
        
    }
    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var fields = ctx.request.all();
        var id = fields.id;
        var country = await Country.findOrFail(id);
        country.name = fields.name;   
        var result = await country.save();
        return result;
    }
    public async destroy(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var country = await Country.findOrFail(id);
        await country.delete();
        return { message: "The country has been deleted!" };
    }
}
