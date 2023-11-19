import { RelationalStudent, RelationalAddress } from '../models/one-to-one.js'

const index = async (req, res) => {
    try {
        const students = await RelationalStudent.find().populate('address')
        res.send(students)
    } catch (err) {
        console.log('Error whild fetching students', err)
        res.send(err)
    }
}

const store = async (req, res) => {
    try {
        const address = await RelationalAddress.create({
            city: 'San Francisco',
            province: 'CA',
        })
        const student = await RelationalStudent.create({
            name: 'David Chamling Rai',
            email: 'dcmchamling8@gmail.com',
            address: address._id,
        })
        console.log('result: ', student)
        res.send(student)
    } catch (e) {
        console.log('Error while storing student data', e)
        res.send(e)
    }
}
export { index, store, storeNew }
