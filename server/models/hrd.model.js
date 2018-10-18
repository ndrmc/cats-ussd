import mongoose from 'mongoose'
import _ from 'lodash'
import BaseSchema from './base.schema'
import {SeasonSchema, Season} from './season.model'
import {RationSchema, Ration} from './ration.model'
import faker from 'faker'
const Schema = mongoose.Schema

export const HRDSchema = new Schema(_.extend(BaseSchema, {
    year_gc: {
        type: Number,
    },
    status: {
        type: Number,
    },
    month_from: {
        type: Number,
    },
    duration: {
        type: Number,
    },
    season: {
        type: SeasonSchema
    },
    ration: {
        type: RationSchema
    }
}))

HRDSchema.statics = {
    fake() {
        return new HRD({
            year_gc: faker.random.number(),
            status: faker.random.number(),
            month_from: faker.random.number(),
            duration: faker.random.number(),
            season: Season.fake(),
            ration: Ration.fake()
        })
    }
}

export const HRD = mongoose.model('HRD', HRDSchema)