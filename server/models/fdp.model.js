import mongoose from 'mongoose'
const Schema = mongoose.Schema
import _ from 'lodash'
import BaseSchema from './base.schema'
import {LocationSchema, LocationModel} from './location.model'
import faker from 'faker'

export const FdpSchema = new Schema(_.extend(BaseSchema, {
    name: String,
    description: String,
    lat: Number,
    lon: Number,
    active: Boolean,
    location: LocationSchema,
    address: String,
    woreda: String,
    zone: String,
    region: String
}))

FdpSchema.statics = {
    fake() {
        return Fdp({
            name: faker.name.findName(),
            description: faker.lorem.sentence(),
            lat: faker.random.number(),
            lon: faker.random.number(),
            active: faker.random.boolean(),
            location: LocationModel.fake(),
            address: faker.address.streetAddress(),
            woreda: faker.random.word(),
            zone: faker.random.word(),
            region: faker.random.word()
        })
    }
}

export const Fdp = mongoose.model('Fdp', FdpSchema)