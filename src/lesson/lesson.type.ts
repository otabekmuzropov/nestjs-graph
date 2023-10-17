import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Lesson') // <-- Add this decorator
export class LessonType {
    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    startDate: string;

    @Field()
    endDate: string;
}