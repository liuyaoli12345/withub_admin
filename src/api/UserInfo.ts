import axios from 'axios';
import {UserItem} from '@/types'

export async function getUserInfoById(userId: string){

}

export async function getUserInfoByName(userName: string){

}


// 数据库根据order返回class
export async function getUserInfo(order: number): Promise<UserItem>{
    const baseUrl ="http://127.0.0.1:5000/userinfo/"
    try {
        const response = await axios.get(baseUrl + order);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching class:", error);
        throw error;
    }
}