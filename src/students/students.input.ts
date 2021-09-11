import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose'

@InputType()
export class CreateStudentsInput {

    @Field(() => String)
    name: string;

    @Field(() => String)
    email: string;

    @Field(() => String)
    cpf: string;
}

@InputType()
export class ListStudentInput {

    @Field(() => String, { nullable: true })
    _id?: MongooseSchema.Types.ObjectId;

    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => String, { nullable: true })
    email?: string;

    @Field(() => String, { nullable: true })
    cpf?: string;
}