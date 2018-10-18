import mongoose from 'mongoose'

export function fakerPlugin(schema, options) {
    schema.static('fake', function (modelName) {
        let m = mongoose.model(modelName);
        console.log(schema.path('requisitions').casterConstructor)
        return m;
    })
}