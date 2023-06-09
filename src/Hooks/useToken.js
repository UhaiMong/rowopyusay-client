import { useEffect, useState } from "react";

export const useToken = email => {
    const [token, setToken] = useState('');

    useEffect(() => {
        if (email) {
            fetch(`http://localhost:8000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken);
                    }
                })
        }
    }, [email]);
    return [token];
}