import mongoose from 'mongoose'
const Schema = mongoose.Schema
import BaseSchema from './base.schema'
import _ from 'lodash'
import faker from 'faker'

export const IdNameSchema = new Schema(_.extend(BaseSchema, {
    id: Number,
    name: String
}))

IdNameSchema.statics = {
    fake(n = 1) {
        let _fake = () => {
            return new IdName({
                id: faker.random.number(),
                name: faker.name.findName()
            })
        }

        if(n == 1) return _fake()
        let idNames = []
        for(let i = 0; i < n; i++) {
            idNames.push(_fake())
        }
        return idNames
    }
}

export const IdName = mongoose.model('IdName', IdNameSchema)