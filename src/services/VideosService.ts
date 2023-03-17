import { Courses } from 'interfaces/Courses';
import api from './api';

export default class PopularVideosService {
    static async getPopularCourses(): Promise<Courses> {
        const response = await api.get('/courses/listPopular');
        return response.data;
    }

    static async createCourse(): Promise<Courses> {
        const response = await api.get('/courses/listPopular');
        return response.data;
    }
}
