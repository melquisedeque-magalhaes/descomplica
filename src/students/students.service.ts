import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Student, StudentDocument } from './schemas/student.schema'
import { CreateStudentsInput, ListStudentInput } from './students.input';

@Injectable()
export class StudentsService {
    constructor(@InjectModel(Student.name) private studentModel: Model<StudentDocument>) { }


    async create(students: CreateStudentsInput) {
        const createStudent = await this.studentModel.create(students)

        return createStudent.save()
    }

    async list(students: ListStudentInput) {
        return this.studentModel.find(students).exec()
    }
}
