import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path';

import { StudentSchema, Student } from "./schemas/Student.schema";
import { StudentsService } from './students.service';
import { StudentsResolver } from './students.resolver';


@Module({
    imports: [
        MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
        MongooseModule
            .forRoot('mongodb+srv://melqui:10203010@cluster0.1rihg.mongodb.net/students?retryWrites=true&w=majority'),
        GraphQLModule.forRoot({
            cors: {
                origin: 'http://localhost:3000',
                credentials: true,
            },
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            sortSchema: true,
            playground: true,
            debug: false
        }),
    ],

    providers: [StudentsService, StudentsResolver]
})
export class StudentsModule { }