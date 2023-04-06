import { Courses } from 'interfaces/Courses';
import { AxiosResponse } from 'axios';
import api from './api';

export default class PopularVideosService {
    static async getPopularCourses(): Promise<Courses> {
        const response: AxiosResponse<Courses> = await api.get(
            '/courses/listPopular'
        );
        return response.data;
    }

    static async createCourse(): Promise<Courses> {
        const response: AxiosResponse<Courses> = await api.post(
            '/courses/creat'
        );
        return response.data;
    }

    static async getAllCourses(): Promise<Courses> {
        const response: AxiosResponse<Courses> = await api.get('courses/all');
        return response.data;
    }
}
