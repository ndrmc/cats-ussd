import chai, { expect } from 'chai'
import request from 'supertest-as-promised'
import httpStatus from 'http-status'
import app from '../../index'
import {Bid, BidSchema} from '../models/bid.model'
import chaiHttp from 'chai-http'
import mongoose from 'mongoose'

chai.config.includeStack = true;
chai.use(chaiHttp)
const should = chai.should()

describe('Bid APIS', () => {

    beforeEach(done => {
        Bid.remove({}, err => {
            done()
        })
    })

    describe('# GET /api/v1/bids', () => {
        it('should get all bids', (done) => {
            let bid = Bid.fake()
            bid.save((err, bid) => {
                if(err) throw err
                
                chai.request(app)
                .get('/api/v1/bids')
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