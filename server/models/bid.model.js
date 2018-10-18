import mongoose from 'mongoose'
const Schema = mongoose.Schema
import _ from 'lodash'
import faker from 'faker'
import BaseSchema from './base.schema'
import {Quote, QuoteSchema} from './quote.model'

export const BidSchema = new Schema(_.extend(BaseSchema, {
    framework_tender_id: Number,
    region_id: Number,
    bid_number: Number,
    bid_bond_format: Number,
    start_date: Date,
    closing_date: Date,
    opening_date: Date,
    status: Number,
    remark: String,
    quotes: [QuoteSchema]
}))

BidSchema.statics = {
    fake(n = 1) {
        let _fake = () => {
            return new Bid({
                framework_tender_id: faker.random.number(),
                region_id: faker.random.number(),
                bid_number: faker.random.number(),
                bid_bond_format: faker.random.number(),
                start_date: faker.date.recent(),
                closing_date: faker.date.recent(),
                opening_date: faker.date.recent(),
                status: faker.random.number(),
                remark: faker.lorem.sentences(),
                quotes: Quote.fake(3)
            })
        }

        if(n == 1) return _fake()
        let bids = []
        for(let i = 0; i < n; i++) {
            bids.push(_fake())
        }
        return bids
    }
}

export const Bid = mongoose.model('Bid', BidSchema)