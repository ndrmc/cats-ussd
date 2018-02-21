import mongoose from 'mongoose'
const Schema = mongoose.Schema
import _ from 'lodash'
import BaseSchema from './base.schema'
import faker from 'faker'

const LocationSchema = new Schema(_.extend(BaseSchema, {
    name: String,
    code: String,
    ancestry: String,
    location_type: Number,
}))

LocationSchema.statics = {
    fake() {
        return new LocationModel({
            name: faker.name.findName(),
            code: faker.random.uuid(),
            ancestry: faker.random.word(),
            location_type: faker.random.number()
        })
    }
}

const LocationModel = mongoose.model('LocationModel', LocationSchema)

export default {
    LocationSchema,
    LocationModel
}