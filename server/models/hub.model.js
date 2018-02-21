import mongoose from 'mongoose'
const Schema = mongoose.Schema
import _ from 'lodash'
import BaseSchema from './base.schema'
import {LocationSchema, LocationModel} from './location.model'
import faker from 'faker'

const HubSchema = new Schema(_.extend(BaseSchema, {
    name: String,
    description: String,
    lat: Number,
    lon: Number,
    location: LocationSchema,
    address: String
}))

HubSchema.statics = {
    fake() {
        return new Hub({
            name: faker.name.findName(),
            description: faker.lorem.sentence(),
            lat: faker.random.number(),
            lon: faker.random.number(),
            location: LocationModel.fake(),
            address: faker.address.streetAddress()
        })
    }
}

const Hub = mongoose.model('Hub', HubSchema)

export default {
    HubSchema,
    Hub
}