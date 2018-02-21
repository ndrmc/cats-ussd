import mongoose from 'mongoose'
import _ from 'lodash'
import BaseSchema from './base.schema'
import faker from 'faker'
const Schema = mongoose.Schema

const RationSchema = new Schema(_.extend(BaseSchema, {
    reference_no: {
        type: String,
    },
    description: {
        type: String,
    },
    current: {
        type: Boolean,
    }
}))

RationSchema.statics = {
    fake() {
        return new Ration({
            reference_no: faker.random.uuid(),
            description: faker.lorem.sentence(),
            current: faker.random.boolean()
        })
    }
}
const Ration = mongoose.model('Ration', RationSchema)
export default {
    RationSchema,
    Ration
}