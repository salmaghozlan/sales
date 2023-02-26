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
        var categoryName = ctx.request.input("category_name");
        if (categoryName) {
            query.where("category_name", 'LIKE',  `%${categoryName}%` );
        }

        var result = await query;
        return result;
        
    }

    public async create(ctx: HttpContextContract) {
        
        var object = await ctx.auth.authenticate();
        const newSchema = schema.create({
            category_name: schema.string(),    
        });

        const fields = await ctx.request.validate({ schema: newSchema})
        
        var category = new Category();
        category.categoryName = fields.category_name;
        var result = await category.save();
        return result;
        
    }

    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var fields = ctx.request.all();
        var id = fields.id;
        var category = await Category.findOrFail(id);
        category.categoryName = fields.category_name;
        
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
