import mongoose from 'mongoose'
const Schema = mongoose.Schema
import BaseSchema from './base.schema'
import _ from 'lodash'
import faker from 'faker'

export const AccountSchema = new Schema(_.extend(BaseSchema, {
    name: String,
    code: Number,
    description: String,
}))

AccountSchema.statics = {
    fake(n = 1) {
        let _faker = () => {
            return new Account({
                name: faker.name.findName(),
                code: faker.random.number(),
                description: faker.lorem.sentences
            })
        }

        if(n == 1) return _faker()
        let accounts = []
        for(let i = 0; i < n; i++) {
            accounts.push(_faker())
        }
        return accounts
    }
}

export const Account = mongoose.model('Account', AccountSchema)