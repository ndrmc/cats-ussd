const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
// import mongoose, {Schema, model} from 'mongoose'
import _ from 'lodash'
import faker from 'faker'
import BaseModelObject from './base.schema'
import {ProgramSchema, Program} from './program.model'
import {RationSchema, Ration} from './ration.model'
import {HRDSchema, HRD} from './hrd.model'
import {FscdAnnualPlanSchema, FscdAnnualPlan} from './fscd-annual-plan.model'
import {RequisitionSchema, Requisition} from './requisition.model'
import {Dispatch, DispatchSchema} from './dispatch.model'
import {RegionalRequestSchema, RegionalRequest} from './regional-request.model'

const OperationSchema = new Schema(_.extend(BaseModelObject, {
  program: {
    type: ProgramSchema,
  },
  hrd: {
    type: HRDSchema
  },
  fscd_annual_plan: {
    type: FscdAnnualPlanSchema
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  year: {
    type: Number,
  },
  round: {
    type: Number,
  },
  month: {
    type: Number,
  },
  expected_start: {
    type: Date,
  },
  expected_end: {
    type: Date,
  },
  actual_start: {
    type: Date,
  },
  actual_end: {
    type: Date,
  },
  status: {
    type: Number,
  },
  ration: {
    type: RationSchema
  },
  requisitions: [RequisitionSchema],
  dispatches: [DispatchSchema],
  regional_requests: [RegionalRequestSchema]
}))

OperationSchema.statics = {
  fake() {
    return new Operation({
      program: Program.fake(),
      hrd: HRD.fake(),
      fscd_annual_plan: FscdAnnualPlan.fake(),
      name: faker.name.findName(),
      description: faker.lorem.sentence(),
      year: faker.random.number(),
      round: faker.random.number(),
      month: faker.random.number(),
      expected_start: faker.date.recent(),
      expected_end: faker.date.future(),
      actual_start: faker.date.recent(),
      actual_end: faker.date.future(),
      status: faker.random.number(),
      ration: Ration.fake(),
      requisitions: Requisition.fake(3),
      dispatches: Dispatch.fake(3),
      regional_requests: RegionalRequest.fake(3)
    })
  }
}

const Operation = mongoose.model('Operation', OperationSchema)

export default {
  OperationSchema,
  Operation
}