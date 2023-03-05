import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import City from 'App/Models/City';

export default class CitiesController {
    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result =await City.findOrFail(id);
        return result;

    }
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var result =await City.all();
        return result;
        
    }
    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
       
        const newSchema = schema.create({
            name: schema.string(),
            country_id : schema.number(),
            
        });
        const fields = await ctx.request.validate({ schema: newSchema})
        
        var city = new City();
        city.name = fields.name;
        city.countryId = fields.country_id;
        var result = await city.save();
        return result;
    
        
    }
    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var fields = ctx.request.all();
        var id = fields.id;
        var city = await City.findOrFail(id);
        city.name = fields.name;   
        city.countryId = fields.country_id;
        var result = await city.save();
        return result;
    }
    public async destroy(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var city = await City.findOrFail(id);
        await city.delete();
        return { message: "The city has been deleted!" };
    }

}
