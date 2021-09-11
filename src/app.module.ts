import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { StudentsModule } from './students/students.module'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
        MongooseModule.forRoot(
            `mongodb+srv://${String(process.env.DATABASE_MONGOOSE_USER)}:${process.env.DATABASE_MONGOOSE_PASSWORD}@cluster0.1rihg.mongodb.net/${process.env.DATABASE_MONGOOSE_NAME}?retryWrites=true&w=majority`,
        ),
        GraphQLModule.forRoot({
            cors: {
                origin: process.env.FRONTEND_URL || process.env.FRONTEND_URL_PRODUCTION,
                credentials: true,
            },
            autoSchemaFile: join(process.cwd(), 'src/ShemasGraphQl/schema.gql'),
            sortSchema: true,
            playground: true,
            debug: false,
        }),

        StudentsModule
    ]
})
export class AppModule {
}
