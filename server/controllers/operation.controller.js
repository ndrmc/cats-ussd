import {Operation} from "../models/operation.model";

function get(req, res) {
    Operation.find({}, (err, operations) => {
        res.json(operations)
    })
}

export default { get }