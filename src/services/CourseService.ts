import { Courses } from 'interfaces/Courses';
import { AxiosResponse } from 'axios';
import api from './api';

export default class CoursesService {
    static async getCourses(): Promise<Courses> {
        const response: AxiosResponse<Courses> = await api.get(
            '/courses/listPopular'
        );
        console.log(response.data);
        return response.data;
    }

    static async createCourse(data: Courses): Promise<Courses> {
        const response: AxiosResponse<Courses> = await api.post(
            '/courses/create',
            data
        );
        // console.log(response.data);
        return response.data;
    }

    static async getCourseById(id: string): Promise<Courses> {
        const response: AxiosResponse<Courses> = await api.get(
            `/courses/listPopular?id=${id}`
        );
        return response.data;
    }
}
