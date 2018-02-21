import chai, { expect } from 'chai'
import request from 'supertest-as-promised'
import httpStatus from 'http-status'
import app from '../../index'
import {Operation, OperationSchema} from '../models/operation.model'
import chaiHttp from 'chai-http'
import mongoose from 'mongoose'

chai.config.includeStack = true;
chai.use(chaiHttp)
const should = chai.should()

describe('Operation APIS', () => {

    beforeEach(done => {
        Operation.remove({}, err => {
            done()
        })
    })

    describe('# GET /api/v1/operations', () => {
        it('should get all operations', (done) => {
            let op = Operation.fake()
            op.save((err, op) => {
                if(err) throw err
                
                chai.request(app)
                .get('/api/v1/operations')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('array')
                    res.body.length.should.be.eql(1)
    
                    done()
                })
            })
        })
    })
})