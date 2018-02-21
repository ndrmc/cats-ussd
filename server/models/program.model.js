const mongoose = require('mongoose')
const Schema = mongoose.Schema
import BaseSchema from './base.schema'
import _ from 'lodash'
import faker from 'faker'

const ProgramSchema = new Schema(_.extend(BaseSchema, {
  name: {
    type: String
  },
  code: {
    type: String,
  },
  description: {
    type: String,
  }
}))

ProgramSchema.statics = {
  fake() {
    return new Program({
      name: faker.name.findName(),
      code: faker.random.word(),
      description: faker.lorem.sentence()
    })
  }
}

const Program = mongoose.model('Program', ProgramSchema)

export default {
  ProgramSchema,
  Program
}