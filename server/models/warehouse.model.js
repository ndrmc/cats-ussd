import mongoose from 'mongoose'
const Schema = mongoose.Schema
import _ from 'lodash'
import BaseSchema from './base.schema'
import {HubSchema, Hub} from './hub.model'
import {LocationSchema, LocationModel} from './location.model'
import {OrganizationSchema, Organization} from './organization.model'
import faker from 'faker'

export const WarehouseSchema = new Schema(_.extend(BaseSchema, {
    name: String,
    description: String,
    hub: HubSchema,
    location: LocationSchema,
    organization: OrganizationSchema,
    lat: Number,
    lon: Number,
    address: String
}))

WarehouseSchema.statics = {
    fake(n = 1) {
        let _faker = () => {
            return Warehouse({
                name: faker.name.findName(),
                description: faker.lorem.sentence(),
                hub: Hub.fake(),
                location: LocationModel.fake(),
                organization: Organization.fake(),
                lat: faker.random.number(),
                lon: faker.random.number(),
                address: faker.address.streetAddress()
            })
        }
        
        if(n == 1) return _faker()
        let warehouses = []
        for(let i = 0; i < n; i++) {
            warehouses.push(_faker())
        }
        return warehouses
    }
}

export const Warehouse = mongoose.model('Warehouse', WarehouseSchema)