import axios from "axios";

export const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': 'e12dcb15-1200-4ce1-bb28-bb99ac0ccb98'
    }
};

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    ...settings,
})