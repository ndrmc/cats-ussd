import mongoose from 'mongoose'
const Schema = mongoose.Schema
import BaseSchema from './base.schema'
import _ from 'lodash'
import faker from 'faker'

export const JournalSchema = new Schema(_.extend(BaseSchema, {
    name: String,
    description: String,
    code: Number
}))

JournalSchema.statics = {
    fake(n = 1) {
        let _faker = () => {
            return new Journal({
                name: faker.name.findName(),
                description: faker.lorem.sentences(),
                code: faker.random.number()
            })
        }

        if(n == 1) return _faker()
        let journals = []
        for(let i = 0; i < n; i++) {
            journals.push(_faker())
        }
        return journals
    }
}

export const Journal = mongoose.model('Journal', JournalSchema)