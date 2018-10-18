import chai, { expect } from 'chai'
import request from 'supertest-as-promised'
import httpStatus from 'http-status'
import app from '../../index'
import {Posting, PostingSchema} from '../models/posting.model'
import chaiHttp from 'chai-http'
import mongoose from 'mongoose'

chai.config.includeStack = true;
chai.use(chaiHttp)
const should = chai.should()

describe('Posting APIS', () => {

    beforeEach(done => {
        Posting.remove({}, err => {
            done()
        })
    })

    describe('# GET /api/v1/postings', () => {
        it('should get all postings', (done) => {
            let po = Posting.fake()
            po.save((err, po) => {
                if(err) throw err
                
                chai.request(app)
                .get('/api/v1/postings')
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