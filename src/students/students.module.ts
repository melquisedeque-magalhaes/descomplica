import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { StudentsService } from './students.service';
import { StudentsResolver } from './students.resolver';
import { StudentSchema, Student } from './schemas/student.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    ],
    providers: [StudentsService, StudentsResolver],
})
export class StudentsModule { }
