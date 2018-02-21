import mongoose from 'mongoose'
const Schema = mongoose.Schema
import _ from 'lodash'
import BaseSchema from './base.schema'
import {LocationSchema, Location} from './location.model'
import faker from 'faker'

const OrganizationSchema = new Schema(_.extend(BaseSchema, {
    name: String,
    long_name: String,
    description: String,
}))

OrganizationSchema.statics = {
    fake() {
        return Organization({
            name: faker.company.companySuffix(),
            long_name: faker.company.companyName(),
            description: faker.lorem.sentence()
        })
    }
}

const Organization = mongoose.model('Organization', OrganizationSchema)

export default {
    Organization,
    OrganizationSchema
}