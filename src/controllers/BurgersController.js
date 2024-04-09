import BaseController from "../utils/BaseController.js";
import { burgersServices } from "../services/BurgersServices.js";



export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router.get('/test', this.testBurgers)
    this.router.get('', this.getBurgers)
    this.router.post('', this.addBurger)
    this.router.delete('/:burgerId', this.deleteBurger)
    // this.router.put('/:burgerId', this.updateBurger)

  }

  testBurgers(request, response, next) {
    console.log('🍔🍟');
    response.send('fattiest bison is leaner than the leanest beef')
  }

  async getBurgers(request, response, next) {
    try {
      const burgers = await burgersServices.getBurgers()
      response.send(burgers)
    } catch (error) {
      next(error)
      console.error(error)
    }
  }

  async addBurger(request, response, next) {
    try {
      const burgerData = request.body
      const burger = await burgersServices.addBurger(burgerData)
      response.send(burger)
    } catch (error) {
      next(error)
      console.error(error)
    }
  }


  async deleteBurger(request, response, next) {
    try {
      const burgerId = request.params.burgerId
      await burgersServices.deleteBurger(burgerId)
      response.send("Burger was deleted")
    } catch (error) {
      next(error)
      console.error(error)
    }
  }


  // async updateBurger(request, response, next) {
  //   try {
  //     const burgerId = request.params.burgerId
  //     await burgersServices.updateBurger(burgerId)
  //     response.send(burgerId)
  //   } catch (error) {
  //     next(error)
  //     console.error(error)
  //   }
  // }



}