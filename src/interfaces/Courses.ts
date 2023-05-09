import User from './User';
import { CourseRating } from './rating';

export interface Courses {
    id: string;
    name: string;
    numberOfVideos: number;
    avatar: string;
    createdBy: string;
    rating: number;
    description: string;
    userId: string;
}
