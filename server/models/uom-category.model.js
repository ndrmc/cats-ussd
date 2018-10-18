import mongoose from 'mongoose'
const Schema = mongoose.Schema
import _ from 'lodash'
import BaseSchema from './base.schema'
import faker from 'faker'

export const UOMCategorySchema = new Schema(_.extend(BaseSchema, {
    name: String
}))

UOMCategorySchema.statics = {
    fake() {
        return new UOMCategory({
            name: faker.name.findName()
        })
    }
}
export const UOMCategory = mongoose.model('UOMCategory', UOMCategorySchema)