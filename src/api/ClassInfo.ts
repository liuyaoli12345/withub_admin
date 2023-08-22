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
    return {
        "id": "11110A",
        "name": "高等数学",
        "teacher": "张三",
        "time": ["周一 1-2节", "周三 3-4节"],
        "rate": 4.5,
        "location": "教学楼A101",
    }
}