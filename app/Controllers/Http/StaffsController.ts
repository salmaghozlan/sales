import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Staff from 'App/Models/Staff';
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import I18n from '@ioc:Adonis/Addons/I18n'

export default class StaffsController {
    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result =await Staff.findOrFail(id);

        return result;

    }
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var result =await Staff.all();

        return result;
        
    }
    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        const newSchema = schema.create({
            first_name: schema.string(),
            last_name: schema.string(),
            email: schema.string(),
            active:schema.number(),
            store_id : schema.number(),            
        });
        var languageFromHeader = ctx.request.header('language');
        var langauge: string = languageFromHeader != null ? languageFromHeader : "ar";

        console.log("Language", langauge);

        const fields = await ctx.request.validate({
            schema: newSchema,
            messages: {
                // required: 'The {{ field }} is required to create a new account',
                'email.unique': 'Email not available',
                'email.required': I18n
                    .locale(langauge)
                    .formatMessage('staffs .required', { field: "email" }),
                'email.email': 'Email must be an email format',
            }
        });
        
        
        var staff = new Staff();
        staff.firstName = fields.first_name;
        staff.lastName = fields.last_name;
        staff.email = fields.email;
        staff.active = fields.active;
        staff.storeId = fields.store_id
        ;
        var result = await staff.save();
        return result;
    
        
    }
    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var fields = ctx.request.all();
        var id = fields.id;
        var staff = await Staff.findOrFail(id);
        staff.firstName = fields.first_name;
        staff.lastName = fields.last_name;
        staff.email = fields.email;
        staff.active = fields.active;
        staff.storeId = fields.store_id;
        
        var result = await staff.save();
        return result;
    }
    public async destroy(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var brand = await Staff.findOrFail(id);
        await brand.delete();
        return { message: "The staff has been deleted!" };
    }
}
