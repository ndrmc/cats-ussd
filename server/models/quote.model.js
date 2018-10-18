import mongoose from 'mongoose'
const Schema = mongoose.Schema
import _ from 'lodash'
import faker from 'faker'
import BaseSchema from './base.schema'
import {Contract, ContractSchema} from './contract.model'
import {Offer, OfferSchema} from './offer.model'

export const QuoteSchema = new Schema(_.extend(BaseSchema, {
    store_id: Number,
    destination_id: Number,
    tarrif_quote: Number,
    remark: String,
    contracts: [ContractSchema],
    offer: OfferSchema,
}))

QuoteSchema.statics = {
    fake(n = 1) {
        let _fake = () => {
            return new Quote({
                store_id: faker.random.number(),
                destination_id: faker.random.number(),
                tarrif_quote: faker.random.number(),
                remark: faker.lorem.sentences(),
                contracts: Contract.fake(3),
                offer: Offer.fake()
            })
        }

        if(n == 1) return _fake()
        let quotes = []
        for(let i = 1; i < n; i++) {
            quotes.push(_fake())
        }
        return quotes
    }
}

export const Quote = mongoose.model('Quote', QuoteSchema)