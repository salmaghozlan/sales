import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category';
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class CategoriesController {
    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result =await Category.findOrFail(id);
        return result;
    }

    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var query = Category.query();
        var Name = ctx.request.input("name");
        var type = ctx.request.input("type");

        if (Name) {
            query.where("name", 'LIKE',  `%${Name}%` );
        }

        if (type){
            query.where("type",'LIKE', `%${type}%`);
        }
        var result = await query;
        return result;
        
    }

    public async create(ctx: HttpContextContract) {
        
        var object = await ctx.auth.authenticate();
        const newSchema = schema.create({
            coupon_id : schema.number.optional(),
            name: schema.string(),
            type: schema.string(),    
        });

        const fields = await ctx.request.validate({ schema: newSchema})
        var category = new Category();
        category.name = fields.name;
        category.type = fields.type;
        var result = await category.save();
        return result;
        
    }

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var fields = ctx.request.all();
        var id = fields.id;
        var category = await Category.findOrFail(id);
        category.name = fields.name;
        category.couponId = fields.couponId;
        category.type = fields.type;
        
        var result = await category.save();
        return result;
    }
    public async destroy(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var category = await Category.findOrFail(id);
        await category.delete();
        return { message: "The category has been deleted!" };
    }
}
