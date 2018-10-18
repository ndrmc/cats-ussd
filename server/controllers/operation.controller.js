import {Operation} from "../models/operation.model";

export function get(req, res) {
    Operation.find({}, (err, operations) => {
        res.json(operations)
    })
}