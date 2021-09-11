import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Field, ObjectType } from '@nestjs/graphql';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type StudentDocument = Student & Document;

@ObjectType()
@Schema()
export class Student {
    @Field(() => String)
    _id: MongooseSchema.Types.ObjectId;

    @Field(() => String)
    @Prop({ required: true })
    name: string;

    @Field(() => String)
    @Prop({ required: true })
    email: string;

    @Field(() => String)
    @Prop({ required: true })
    cpf: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
