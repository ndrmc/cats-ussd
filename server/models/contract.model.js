import mongoose from 'mongoose'
const Schema = mongoose.Schema
import _ from 'lodash'
import faker from 'faker'
import BaseSchema from './base.schema'
import {IdName, IdNameSchema} from './id-name.model'

export const ContractSchema = new Schema(_.extend(BaseSchema, {
    contract_no: Number,
    transporter: IdNameSchema,
    description: String
}))

ContractSchema.statics = {
    fake(n = 1) {
        let _fake = () => {
            return new Contract({
                contract_no: faker.random.number(),
                transporter: IdName.fake(),
                description: faker.lorem.sentences()
            })
        }

        if(n == 1) return _fake()
        let contracts = []
        for(let i = 0; i < n; i++) {
            contracts.push(_fake())
        }
        return contracts
    }
}

export const Contract = mongoose.model('Contract', ContractSchema)