import mongoose from 'mongoose'

const Schema = mongoose.Schema

const employeeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        salary: {
            type: Number,
            required: true,
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        timestamps: true,
    }
)

employeeSchema.virtual('contacts', {
    ref: 'Contact',
    localField: '_id',
    foreignField: 'employee_id',
})

const contactDetailsSchema = new Schema(
    {
        phoneNumber: { type: String, required: true },
        email: { type: String, required: true },
        employee_id: {
            type: Schema.Types.ObjectId,
            ref: 'Employee',
            required: true,
        },
    },
    { timestamps: true }
)

const Employee = mongoose.model('Employee', employeeSchema)
const Contact = mongoose.model('Contact', contactDetailsSchema)

export { Employee, Contact }
