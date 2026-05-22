import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

type CreatePostBody = {
    user_id: number;
    id: number;
    title: string;
    body: string;
}

type CreatePostResponse = CreatePostBody & { id: number };
 
const createPost = async (data: CreatePostBody): Promise<CreatePostBody> => {
    const response = await axios.post<CreatePostBody>(
        "http://localhost:5000/api/api_create_user", data
    );
    return response.data
}
