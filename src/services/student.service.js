import fs from 'fs'
const ruta = './students.json'
export default class StudentService {
    addStudent = async (student) => {
        let data = await this.getStudents()
        data.push(student)
        await fs.promises.writeFile(ruta, JSON.stringify(data, null, 4), 'utf-8')
        return true
    }
    getStudents = async () => {
        const data = await fs.promises.readFile(ruta, 'utf-8')
        const students = JSON.parse(data)
        return students
    }
    getStudentById = async (id) => {
        let students = await this.getStudents()
        let newStudent = students.find(student => student.id == id)
        return newStudent
    }
    updateStudent = async (id, objStudent) => {
        let students = await this.getStudents()
        let newStudents = students.map(function (student) {
            if (student.id == id) {
                return {
                    id,
                    nombre: objStudent.nombre,
                    apellido1: objStudent.apellido1,
                    apellido2: objStudent.apellido2,
                    run: objStudent.run,
                    promedio: objStudent.promedio,
                    peso: objStudent.peso,
                    estatura: objStudent.estatura
                }
            }
            return student
        })
        await fs.promises.writeFile(ruta, JSON.stringify(newStudents, null, 4), 'utf-8')
        return true
    }
    deleteStudent = async (id) => {
        let students = await this.getStudents()
        let newStudents = students.filter(student => student.id != id)
        await fs.promises.writeFile(ruta, JSON.stringify(newStudents, null, 4), 'utf-8')
        return true
    }
    StudentbestPromedio = async () => {
        let students = await this.getStudents()
        let mejor = students[0].promedio
        let est = {}
        for (let i = 0; i < students.length; i++) {
            if (mejor < students[i].promedio) {
                mejor = students[i].promedio
                est = students[i]
            }
        }
        return est
    }
    StudentIMC = async (id) =>{
        let students = await this.getStudents()
        let StudentByID = students.find(student => student.id == id)
        const StudentPeso = StudentByID.peso
        const StudentEstatura = StudentByID.estatura
        let IMCStudent = StudentPeso/(StudentEstatura*StudentEstatura)
        return IMCStudent
        
    }
    deleteALL = async () =>{
        let students = await this.getStudents()
        let newStudents = {}
        await fs.promises.writeFile(ruta,JSON.stringify(no,null,4),'utf-8')
        return true 
    }


}

