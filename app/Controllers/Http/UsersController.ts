import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User';

export default class UsersController {



    public async getAll(ctx: HttpContextContract) {
        

        return "Get All Users";
    }

    public async login(ctx: HttpContextContract) {
        var object = ctx.request.all();
        var email = object.email;
        var password = object.password;

        var result = await ctx.auth.attempt(email, password);
        return result;
    }


    public async logout(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        await ctx.auth.logout();
        return { message: "Logout" }
    }

    public async create(ctx: HttpContextContract) {

        const newSchema = schema.create({
            first_name : schema.string(),
            last_name : schema.string(),
            user_name : schema.string({},[
                rules.unique({
                    table: 'users',
                    column: 'user_name',
                })
            ]),

            phone : schema.number([
                rules.unique({
                    table: 'users',
                    column: 'phone',
                })
            ]),
            email: schema.string({}, [
                rules.email(),
                rules.unique({
                    table: 'users',
                    column: 'email',
                })
            ]),
            password: schema.string(),
            // birth_date : schema.date(),
            national_id_number: schema.number(),
            state_province : schema.string(),
            city : schema.string(),
            postal_code : schema.number(),
            address1 : schema.string(),
            address2:schema.string(),
        
         
         });

        const fields = await ctx.request.validate({ schema: newSchema });

        var user = new User();
        user.firstName = fields.first_name;
        user.lastName = fields.last_name;
        user.userName = fields.user_name;
        user.email = fields.email;
        user.password = fields.password;
        user.phone = fields.phone;
        // user.birthDate = fields.birth_date;
        user.nationalIdNumber = fields.national_id_number;
        user.stateProvince = fields.state_province;
        user.city = fields.city;
        user.postalCode = fields.postal_code;
        user.address1 = fields.address1;
        user.address2 = fields.address2;
        
        var newUser = await user.save();
        return newUser;

    }
}