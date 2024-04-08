import { dbContext } from "../db/DbContext.js"




class BurgersServices {
  async deleteBurger(burgerId) {
    const burgerToDelete = await dbContext.Burgers.findById(burgerId)
    if (!burgerToDelete) throw new Error("This burger doesn't exist, and maybe never did 🔮")

    await dbContext.Burgers.deleteOne({ _id: burgerId })
  }
  async getBurgers() {
    const burgers = await dbContext.Burgers.find()
    return burgers
  }


  async addBurger(burgerData) {
    const burger = await dbContext.Burgers.create(burgerData)
    return burger
  }


}

export const burgersServices = new BurgersServices