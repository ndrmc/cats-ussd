const mongoose = require('mongoose')
const Schema = require('mongoose').Schema
// import mongoose, {Schema, model} from 'mongoose'
import _ from 'lodash'
import faker from 'faker'
import {fakerPlugin} from '../../config/mongoose-faker-plugin'
import BaseModelObject from './base.schema'
import {ProgramSchema, Program} from './program.model'
import {RationSchema, Ration} from './ration.model'
import {HRDSchema, HRD} from './hrd.model'
import {FscdAnnualPlanSchema, FscdAnnualPlan} from './fscd-annual-plan.model'
import {RequisitionSchema, Requisition} from './requisition.model'
import {Dispatch, DispatchSchema} from './dispatch.model'
import {RegionalRequestSchema, RegionalRequest} from './regional-request.model'

export const OperationSchema = new Schema(_.extend(BaseModelObject, {
  program: {
    type: ProgramSchema,
  },
  hrd: HRDSchema,
  fscd_annual_plan: FscdAnnualPlanSchema,
  name: String,
  description: String,
  year: Number,
  round: Number,
  month: Number,
  expected_start: Date,
  expected_end: Date,
  actual_start: Date,
  actual_end: Date,
  status: Number,
  ration: RationSchema,
  requisitions: [RequisitionSchema],
  dispatches: [DispatchSchema],
  regional_requests: [RegionalRequestSchema],
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

export const Operation = mongoose.model('Operation', OperationSchema)
