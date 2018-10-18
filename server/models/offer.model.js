import mongoose from 'mongoose'
const Schema = mongoose.Schema
import _ from 'lodash'
import faker from 'faker'
import BaseSchema from './base.schema'
import {IdName, IdNameSchema} from './id-name.model'

export const OfferSchema = new Schema(_.extend(BaseSchema, {
    transporter: IdNameSchema,
    store: IdNameSchema,
    destination_id: Number,
    tarrif_amount: Number
}))

OfferSchema.statics = {
    fake(n = 1) {
        let _fake = () => {
            return new Offer({
                transporter: IdName.fake(),
                store: IdName.fake(),
                destination_id: faker.random.number(),
                tarrif_amount: faker.random.number()
            })
        }

        if(n == 1) return _fake()
        let offers = []
        for(let i = 0; i < n; i++) {
            offers.push(_fake())
        }
        return offers
    }
}

export const Offer = mongoose.model('Offer', OfferSchema)