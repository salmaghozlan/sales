import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'

export default class ProductsController {
    public async upload(ctx: HttpContextContract) {
        var image = ctx.request.file('image')
  
        if (!image) return {message: "invalid file"}
        await image.move(Application.tmpPath("images"))
        return { message : "The image has been uplaoded"}  
      }
}
