import mongoose, {Schema} from 'mongoose'
import {OperationSchema} from './operation.model'
import {CommoditySchema, Commodity} from './commodity.model'
import {RationSchema, Ration} from './ration.model'
import BaseSchema from './base.schema'
import faker from 'faker'
import _ from 'lodash'

const RequisitionSchema = new Schema(_.extend(BaseSchema, {
    id: Number,
    requisition_no: String,
    commodity: {
        type: CommoditySchema,
        default: () => {}
    },
    region_id: Number,
    zone_id: Number,
    ration: {
        type: RationSchema
    },
    requested_by: String,
    requested_on: Date,
    status: Number,
}))

RequisitionSchema.statics = {
    fake(n) {
        let _f = () => {
            return new Requisition({
                requisition_no: faker.random.uuid(),
                commodity: Commodity.fake(),
                region_id: faker.random.number(),
                zone_id: faker.random.number(),
                ration: Ration.fake(),
                requested_by: faker.name.findName(),
                requested_on: faker.date.recent(),
                status: faker.random.number(),
            })
        }
        
        if(n) {
            let fakes = []
            for(let i = 0; i < n; i++) {
                fakes.push(_f())
            }
            return fakes;
        }
        
    }
}

const Requisition = mongoose.model('Requisition', RequisitionSchema)

export default {
    RequisitionSchema,
    Requisition
}