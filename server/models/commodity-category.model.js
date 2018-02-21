import mongoose from 'mongoose'
const Schema = mongoose.Schema
import _ from 'lodash'
import {UOMCategorySchema, UOMCategory} from './uom-category.model'
import BaseSchema from './base.schema'
import faker from 'faker'

const CommodityCategorySchema = new Schema(_.extend(BaseSchema, {
    name: String,
    code: String,
    code_am: String,
    description: String,
    UOM_category: UOMCategorySchema
}))

CommodityCategorySchema.statics = {
    fake() {
        return new CommodityCategory({
            name: faker.name.findName(),
            code: faker.random.uuid(),
            code_am: faker.random.uuid(),
            description: faker.lorem.sentence(),
            UOM_category: UOMCategory.fake()
        })
    }
}

const CommodityCategory = mongoose.model('CommodityCategory', CommodityCategorySchema)

export default {
    CommodityCategorySchema,
    CommodityCategory
}