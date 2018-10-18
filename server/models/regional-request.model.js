import mongoose from 'mongoose'
const Schema = mongoose.Schema
import _ from 'lodash'
import faker from 'faker'
import {RationSchema, Ration} from './ration.model'
import {ProgramSchema, Program} from './program.model'
import BaseSchema from './base.schema'

export const RegionalRequestSchema = new Schema(_.extend(BaseSchema, {
    reference_number: String,
    region_id: Number,
    ration: RationSchema,
    requested_date: Date,
    program: ProgramSchema,
    remark: String,
    generated: Boolean
}))

RegionalRequestSchema.statics = {
    fake() {
        return new RegionalRequest({
            reference_number: faker.random.uuid(),
            region_id: faker.random.number(),
            ration: Ration.fake(),
            requested_date: faker.date.recent(),
            program: Program.fake(),
            remark: faker.lorem.words(),
            generated: faker.random.boolean()
        })
    }
}

export const RegionalRequest = mongoose.model('RegionalRequest', RegionalRequestSchema)