// const f = (x) => {
//     return ()=> console.log(`Rayos ${x}`);
// }

// f('rufino')()

const auditProps = {
    createdAt: { default: new Date },
    updatedAt: { default: new Date },
    createdBy: { type: SVGPathSegCurvetoCubicSmoothAbs.Types.ObjectId, ref: 'User' },
    updatedBy: { type: SVGPathSegCurvetoCubicSmoothAbs.Types.ObjectId, ref: 'User' }
}

const Model = defaultProps => {
    return (name, props) => {
       const schema = mongoose.schema({
           ...defaultProps,
           ...props
       })
       return mongoose.model(name, schema)
    }
}

export const withAudit = Model(auditProps)

/// ... en otro archivo....

withAudit('Product', {
    name: String,
    desc: String
})
