import mongoose from 'mongoose'

const schema = mongoose.Schema

// embedded relationships
const EmbeddedStudentSchema = new schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        address: {
            city: {
                type: String,
                required: true,
            },
            province: {
                type: String,
                required: true,
            },
        },
    },
    { timestamps: true }
)

// relational relationships
const RelationalStudentSchema = new schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        address: {
            type: schema.Types.ObjectId,
            ref: 'RelationalAddress',
        },
    },
    {
        timestamps: true,
    }
)

const RelationalAddressSchema = new schema(
    {
        city: {
            type: String,
            required: true,
        },
        province: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

const EmbeddedStudent = mongoose.model('EmbeddedStudent', EmbeddedStudentSchema)
const RelationalStudent = mongoose.model(
    'RelationalStudent',
    RelationalStudentSchema
)
const RelationalAddress = mongoose.model(
    'RelationalAddress',
    RelationalAddressSchema
)

export { EmbeddedStudent, RelationalStudent, RelationalAddress }
