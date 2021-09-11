import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Student } from './schemas/Student.schema';
import { ListStudentInput, CreateStudentsInput } from './students.input';
import { StudentsService } from './students.service';

@Resolver(() => Student)
export class StudentsResolver {

    constructor(private studentsService: StudentsService) { }

    @Query(() => [Student])
    async listStudent(@Args('students', { nullable: true }) students?: ListStudentInput) {
        return await this.studentsService.list(students)
    }

    @Mutation(() => Student)
    async createStudent(@Args('students') students: CreateStudentsInput) {
        return await this.studentsService.create(students)
    }

}
