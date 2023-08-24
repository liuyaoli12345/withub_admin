import axios from 'axios';
import {ClassItem} from '@/types'

export async function getClassById(classId: string){

}

export async function getClassByName(className: string){

}

export async function getClassByTeacher(teacherName: string){

}

// 数据库根据order返回class
export async function getClass(order: number): Promise<ClassItem>{
    const baseUrl ="http://127.0.0.1:5000/classinfo/"
    try {
        const response = await axios.get(baseUrl + order);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching class:", error);
        throw error;
    }
}