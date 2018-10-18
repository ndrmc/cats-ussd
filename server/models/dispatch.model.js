import mongoose from 'mongoose'
import _ from 'lodash'
const Schema = mongoose.Schema
import BaseSchema from './base.schema'
import {FdpSchema, Fdp} from './fdp.model'
import {HubSchema, Hub} from './hub.model'
import {WarehouseSchema, Warehouse} from './warehouse.model'
import {TransporterSchema, Transporter} from './transporter.model'
import faker from 'faker'

export const DispatchSchema = new Schema(_.extend(BaseSchema, {
    gin_no: String,
    requisition_number: String,
    dispatch_date: Date,
    fdp: FdpSchema,
    weight_bridge_ticket_number: String,
    transporter: TransporterSchema,
    plate_number: String,
    trailer_plate_number: String,
    drivers_name: String,
    remark: String,
    draft: Boolean,
    deleted: Boolean,
    deleted_at: Date,
    hub: HubSchema,
    warehouse: WarehouseSchema,
    storekeeper_name: String,
    dispatch_id_guid: String,
    dispatched_date_ec: String,
    dispatch_type_id: Number,
    dispatch_type: Number
}))

DispatchSchema.statics = {
    fake() {
        return new Dispatch({
            gin_no: faker.random.uuid(),
            requisition_number: faker.random.uuid(),
            dispatch_date: faker.date.recent(),
            fdp: Fdp.fake(),
            weight_bridge_ticket_number: faker.random.word(),
            transporter: Transporter.fake(),
            plate_number: faker.random.uuid(),
            trailer_plate_number: faker.random.uuid(),
            drivers_name: faker.name.findName(),
            remark: faker.lorem.words(),
            draft: faker.random.boolean(),
            deleted: faker.random.boolean(),
            deleted_at: faker.date.recent(),
            hub: Hub.fake(),
            warehouse: Warehouse.fake(),
            storekeeper_name: faker.name.findName(),
            dispatch_id_guid: faker.random.word(),
            dispatch_date_ec: faker.random.word(),
            dispatch_type_id: faker.random.number(),
            dispatch_type: faker.random.number()
        })
    }
}

export const Dispatch = mongoose.model('Dispatch', DispatchSchema)