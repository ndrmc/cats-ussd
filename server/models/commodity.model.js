import mongoose, {Schema} from 'mongoose'
import {CommodityCategorySchema, CommodityCategory} from './commodity-category.model'
import {UOMCategorySchema, UOMCategory} from './uom-category.model'
import _ from 'lodash'
import BaseSchema from './base.schema'
import faker from 'faker'

export const CommoditySchema = new Schema(_.extend(BaseSchema, {
    name: String,
    name_am: String,
    long_name: String,
    code: String,
    code_am: String,
    description: String,
    hazardous: Boolean,
    cold_storage: Boolean,
    min_temprature: Number,
    max_temprature: Number,
    commodity_category: {
        type: CommodityCategorySchema,
        default: () => {}
    },
    uom_category: {
        type: UOMCategorySchema,
        default: () => {}
    }
}))

CommoditySchema.statics = {
    fake() {
        return new Commodity({
            name: faker.random.word(),
            name_am: faker.random.word(),
            long_name: faker.random.word(),
            code: faker.random.uuid(),
            code_am: faker.random.uuid(),
            description: faker.lorem.sentence(),
            hazardous: faker.random.boolean(),
            cold_storage: faker.random.boolean(),
            min_temprature: faker.random.number(),
            max_temprature: faker.random.number(),
            commodity_category: CommodityCategory.fake(),
            uom_category: UOMCategory.fake()
        })
    }
}

export const Commodity = mongoose.model('Commodity', CommoditySchema)