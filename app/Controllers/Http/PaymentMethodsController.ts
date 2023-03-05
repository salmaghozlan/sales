import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import PaymentMethod from 'App/Models/PaymentMethod';

export default class PaymentMethodsController {

    public async getById(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var id = ctx.params.id;
        var result = await PaymentMethod.findOrFail(id);
        return result;

    }
    public async getAll(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        console.log(object);
        var result = await PaymentMethod.all();
        return result;

    }
    public async create(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();

        const newSchema = schema.create({
            name: schema.string(),
            description: schema.string(),
            logo: schema.string(),
            status: schema.number(),



        });
        const fields = await ctx.request.validate({ schema: newSchema })
        //    for logo
        //  var image = ctx.request.file('image')

        // if (!image) return {message: "invalid file"}
        // await image.move(Application.tmpPath("images"))

        var paymentMethod = new PaymentMethod();
        paymentMethod.name = fields.name;
        paymentMethod.description = fields.description;
        paymentMethod.logo = fields.logo;
        paymentMethod.status = fields.status;
        var result = await paymentMethod.save();
        return result;


    }
    public async update(ctx: HttpContextContract) {
        var object = await ctx.auth.authenticate();
        var fields = ctx.request.all();
        var id = fields.id;
        var paymentMethod = await PaymentMethod.findOrFail(id);
        paymentMethod.name = fields.name;
        paymentMethod.description = fields.description;
        paymentMethod.logo = fields.logo;
        paymentMethod.status = fields.status;
        var result = await paymentMethod.save();
        return result;
    }
    public async destroy(ctx: HttpContextContract) {
        var id = ctx.params.id;
        var paymentMethod = await PaymentMethod.findOrFail(id);
        await paymentMethod.delete();
        return { message: "The payment method has been deleted!" };
    }
}
