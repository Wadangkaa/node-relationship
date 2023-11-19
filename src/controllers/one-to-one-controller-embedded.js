import { EmbeddedStudent } from '../models/one-to-one.js'

const index = async (req, res) => {
    try {
        const students = await EmbeddedStudent.find()
        res.send(students)
    } catch (err) {
        console.log('Error whild fetching students', err)
        res.send(err)
    }
}

const store = async (req, res) => {
    try {
        const student = await EmbeddedStudent.create({
            name: 'David Chamling Rai',
            email: 'dcmchamling2@gmail.com',
            address: {
                city: 'San Francisco',
                province: 'CA',
            },
        })
        res.send(student)
    } catch (e) {
        console.log('Error while storing student data', e)
        res.send(e)
    }
}

export { index, store }
