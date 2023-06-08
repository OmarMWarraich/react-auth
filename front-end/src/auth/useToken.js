import { useState } from 'react';

export const useToken = () => {
    const [token, setToken] = useState(() => {
        return localStorage.getItem('token');
    });

    const saveToken = userToken => {
        localStorage.setItem('token', userToken);
        setToken(userToken);
    }

    return [
        token,
        saveToken
    ]
}