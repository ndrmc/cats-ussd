import {Bid} from "../models/bid.model";

export function get(req, res) {
    Bid.find({}, (err, bids) => {
        res.json(bids)
    })
}