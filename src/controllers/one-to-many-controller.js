import { Contact, Employee } from '../models/one-to-many.js'

const index = async (req, res) => {
    try {
        const employee = await Employee.find().populate('contacts')
        res.send(employee)
    } catch (error) {
        console.log(
            'Error while fetching Employee in one-to-many relationship',
            error
        )
        res.send(error)
    }
}
const store = async (req, res) => {
    try {
        const employee = await Employee.create({
            name: 'Employee',
            salary: 123,
        })

        const address = await Contact.create({
            phoneNumber: '123',
            email: 'email@gmail.com',
            employee_id: employee._id,
        })

        res.send(employee)
    } catch (error) {
        console.log(
            'Error while creating Employee in one-to-many relationship',
            error
        )
        res.send(error)
    }
}

export { index, store }
