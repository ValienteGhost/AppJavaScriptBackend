import { Router } from 'express'
import StudentService from '../services/student.service.js'
const router = Router()
const Student = new StudentService()

router.post('/', async (req, res) => {
    try {
        const obj = { id: 6, nombre: "Matías", apellido1: "Herrera", apellido2: "Ramirez", run: "11.936.275-7", promedio: 65, peso: 64, estatura: 1.71 }
        await Student.addStudent(obj)
        const data = await Student.getStudents()
        return res.status(200).json(data)
    } catch (err) {
        console.log('error' + err)
    }

})
router.get('/', async (req, res) => {
    try {
        const data = await Student.getStudents()
        return res.render('/index')
    } catch (err) {
        console.log(err)
    }
})
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        let newStudent = await Student.getStudentById(id)
        return res.status(200).json(newStudent)
    } catch (err) {
        console.log(err)
    }

})
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const obj = { id: 7, nombre: "Hernan", apellido1: "luxardo", apellido2: "Ramirez", run: "14.463.365-7", promedio: 69, peso: 70, estatura: 1.75 }
        let newStudents = await Student.updateStudent(5, obj)
        const data = await Student.getStudents()
        return res.status(200).json(data)
    } catch (err) {
        console.log('error ' + err)
    }
})
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        await Student.deleteStudent(id)
        const data = await Student.getStudents()
        return res.status(200).json(data)
    } catch (err) {
        console.log('error ' + err)
    }
})
router.get('/mejor', async (req, res) => {
    try {
        const a = await Student.StudentbestPromedio(1)
        console.log(a)
        return res.status(200).json(a)
    } catch (err) {
        console.log('error ' + err)
    }
})
router.get('/imc', async (req, res) => {
    try {
        const IMC = await Student.StudentIMC(2)
        console.log(IMC)
        return res.status(200).json(IMC)
    } catch (err) {
        console.log('error ' + err)
    }
})
router.delete('/deleteALL', async (req, res) => {
    try {
        await Student.deleteALLStudents()
        const data = await Student.getStudents()
        return res.status(200).json(data)
    } catch (err) {
        console.log('error ' + err)
    }
})


export default router  