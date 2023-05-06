import axios from "axios";
import { dalleapi } from "../api/dalleapi"
import Cookies from 'universal-cookie';

const cookies = new Cookies();

interface ILogin {
    email: string,
    password: string,
}

interface iRegister {
    nickname: string,
    email: string,
    password: string,
}

interface iUpdate {
    nickname: string,
    email: string,
    authToken: string,
}

interface iPassword {
    currentPassword: string,
    newPassword: string,
    authToken: string,
}

interface iUpload {
    id: string,
    url: string,
    authToken: string,
}

export const loginRequest = async (data: ILogin) => {
    return await dalleapi.post('/api/v1/login', {
        email: data.email,
        password: data.password
    });
}

export const registerRequest = async (data: iRegister) => {
    return await dalleapi.post('/api/v1/register', {
        nickname: data.nickname,
        email: data.email,
        password: data.password
    });
}

export const tokenRequest = async (refreshToken: string) => {
    return await dalleapi.post('/api/v1/token', {
        refreshToken: refreshToken,
    });
}

export const logoutRequest = async (refreshToken: string) => {
    const r = await dalleapi.delete('/api/v1/logout', {
        data: { refreshToken: refreshToken }
    });
    location.reload();
    cookies.remove('refreshToken');
    return r;
}

export const getUserRequest = async (authToken: string) => {
    return await dalleapi.get('/api/v1/getUser', {
        headers: { Authorization: `Bearer ${authToken}` }
    });
}

export const updateUserRequest = async (data: iUpdate) => {
    return await dalleapi.post('/api/v1/updateUser', {
        nickname: data.nickname,
        email: data.email
    }, {
        headers: { Authorization: `Bearer ${data.authToken}` }
    })
}

export const changePasswordRequest = async (data: iPassword) => {
    return await dalleapi.post('/api/v1/changePassword', {
        currentPassword: data.currentPassword,
        newPassword: data.newPassword
    }, {
        headers: { Authorization: `Bearer ${data.authToken}` }
    })
}

export const uploadImageRequest = async (data: iUpload) => {
    return await dalleapi.post('/api/v1/uploadImage', {
        id: data.id,
        url: data.url
    }, {
        headers: { Authorization: `Bearer ${data.authToken}` }
    })
}