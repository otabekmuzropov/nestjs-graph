import { Resolver, Query } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver(of => LessonType) // <-- Add this decorator
export class LessonResolver {
    @Query(returns => LessonType)
    lesson() {
        return {
            id: 'asdfasdf',
            name: 'Physics Class',
            startDate: (new Date()).toISOString(),
            endDate: (new Date()).toISOString(),
        }
    }
}