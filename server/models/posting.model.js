import mongoose from 'mongoose'
import _ from 'lodash'
import {BaseSchema} from './base.schema'
import faker from 'faker'
import {Warehouse, WarehouseSchema} from './warehouse.model'
import {Account, AccountSchema} from './account.model'
import {Journal, JournalSchema} from './journal.model'
import {IdName, IdNameSchema} from './id-name.model'
const Schema = mongoose.Schema

export const PostingSchema = new Schema(_.extend(BaseSchema, {
    posting_code: String,
    document_type: Number,
    document_id: Number,
    posted: Boolean,
    reveresed_posting_id: Number,
    posting_type: Number,
    warehouse: WarehouseSchema,
    account: AccountSchema,
    journal: JournalSchema,
    donor: IdNameSchema,
    hub: IdNameSchema,
    store: IdNameSchema,
    // stack: // todo: understand this
    project: IdNameSchema,
    batch_id: Number,
    program: IdNameSchema,
    operation: IdNameSchema,
    commodity: IdNameSchema,
    commodity_category: IdNameSchema,
    quantity: Number,
    region_id: Number,
    zone_id: Number,
    woreda_id: Number,
    fdp: IdNameSchema,
}))

PostingSchema.statics = {
    fake(n = 1) {
        let _faker = () => {
            return new Posting({
                posting_code: faker.random.uuid(),
                document_type: faker.random.number(),
                document_id: faker.random.number(),
                posted: faker.random.boolean(),
                reversed_posting_id: faker.random.number(),
                posting_type: faker.random.number(),
                warehouse: Warehouse.fake(),
                account: Account.fake(),
                journal: Journal.fake(),
                donor: IdName.fake(),
                hub: IdName.fake(),
                store: IdName.fake(),
                project: IdName.fake(),
                batch_id: faker.random.number(),
                program: IdName.fake(),
                operation: IdName.fake(),
                commodity: IdName.fake(),
                commodity_category: IdName.fake(),
                quantity: faker.random.number(),
                region_id: faker.random.number(),
                zone_id: faker.random.number(),
                woreda_id: faker.random.number(),
                fdp: IdName.fake()
            })
        }
        
        if(n == 1) return _faker()
        let postings = []
        for(let i = 0; i < n; i++) {
            postings.push(_faker())
        }
        return postings
    }
}

export const Posting = mongoose.model('Posting', PostingSchema)