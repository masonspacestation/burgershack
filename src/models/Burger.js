import { Schema } from "mongoose"



export const BurgerSchema = new Schema({

  name: String,
  cheese: String,
  hasBacon: Boolean

})