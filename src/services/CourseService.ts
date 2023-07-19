import { Courses } from 'interfaces/Courses';
import { AxiosResponse } from 'axios';
import api from './api';

export default class CoursesService {
    static async getRecommendedCourses(): Promise<Courses[]> {
        const response = await api.get('/courses/listPopular');
        return response.data;
    }

    /* list popular por enqunto */
    static async getProducerCourse(id: string): Promise<Courses[]> {
        const response = await api.get(`/courses/listById/${id}`);
        return response.data;
    }

    /* pergunta pro usuário se ele realmente deseja iniciar o curso? */
    static async getStartedCourses(id: string): Promise<Courses[]> {
        const response = await api.get(`/courses/listById/${id}`);
        return response.data;
    }

    static async createCourse(data: Courses): Promise<Courses> {
        const response: AxiosResponse<Courses> = await api.post(
            '/courses/create',
            data
        );
        return response.data;
    }

    static async getUsersCourses(id: string): Promise<Courses[]> {
        const response = await api.get(`/courses/listById/${id}`);
        return response.data;
    }

    static async getCourseById(id: string): Promise<Courses> {
        const response: AxiosResponse<Courses> = await api.get(
            `/courses/getById/${id}`
        );
        return response.data;
    }

    static async searchCourse(course: string): Promise<Courses> {
        const response = await api.get(`/courses/searchCourses/${course}`);
        return response.data;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static async ratingCourse(data: any) {
        const response = await api.post('/courses/rating', data);
        return response.data;
    }
}
