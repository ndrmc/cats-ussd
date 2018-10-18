import mongoose from 'mongoose'
import BaseSchema from './base.schema'
import {RationSchema, Ration} from './ration.model'
import _ from 'lodash'
import faker from 'faker'
const Schema = mongoose.Schema

export const FscdAnnualPlanSchema = new Schema(_.extend(BaseSchema, {
    name: {
        type: String,
    },
    code: {
        type: String,
    },
    year: {
        type: Number,
    },
    duration: {
        type: Number,
    },
    status: {
        type: Number,
    },
    archive: {
        type: Boolean,
    },
    ration: {
        type: RationSchema
    }
}))

FscdAnnualPlanSchema.statics = {
    fake() {
        return new FscdAnnualPlan({
            name: faker.name.findName(),
            code: faker.random.word(),
            year: faker.random.number(),
            duration: faker.random.number(),
            status: faker.random.number(),
            archive: faker.random.boolean(),
            ration: Ration.fake()
        })
    }
}
export const FscdAnnualPlan = mongoose.model('FscdAnnualPlan', FscdAnnualPlanSchema)