import {Posting} from "../models/posting.model";

export function get(req, res) {
    Posting.find({}, (err, postings) => {
        res.json(postings)
    })
}