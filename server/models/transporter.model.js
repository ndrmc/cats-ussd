import mongoose from 'mongoose'
const Schema = mongoose.Schema
import _ from 'lodash'
import BaseSchema from './base.schema'
import faker from 'faker'

export const TransporterSchema = new Schema(_.extend(BaseSchema, {
    name: String,
    code: String,
    vehicle_count: Number,
    lift_capacity: Number,
    capital: Number,
    employees: Number,
    contact: String,
    contact_phone: String,
    remark: String,
    status: Number,
    ownership_type_id: Number
}))

TransporterSchema.statics = {
    fake() {
        return new Transporter({
            name: faker.name.findName(),
            code: faker.random.uuid(),
            vehicle_count: faker.random.number(),
            lift_capacity: faker.random.number(),
            capital: faker.random.number(),
            employees: faker.random.number(),
            contact: faker.name.findName(),
            contact_phone: faker.phone.phoneNumber(),
            remark: faker.lorem.words(),
            status: faker.random.number(),
            ownership_type_id: faker.random.number(),
        })
    }
}

export const Transporter = mongoose.model('Transporter', TransporterSchema)