import mongoose from 'mongoose'
import _ from 'lodash'
import BaseSchema from './base.schema'
import faker from 'faker'
const Schema = mongoose.Schema

export const SeasonSchema = new Schema(_.extend(BaseSchema, {
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    month_from: {
        type: Date,
    },
    month_to: {
        type: Date,
    }
}))

SeasonSchema.statics = {
    fake() {
        return {
            name: faker.name.findName(),
            description: faker.lorem.sentence(),
            month_from: faker.date.recent(),
            month_to: faker.date.future()
        }
    }
}

export const Season = mongoose.model('Season', SeasonSchema)