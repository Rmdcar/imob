import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BoxDashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const tokenExpiration = localStorage.getItem('tokenExpiration'); 
        const currentTime = new Date().getTime();
        if (!token || currentTime > tokenExpiration) {
        localStorage.removeItem('token'); 
        localStorage.removeItem('tokenExpiration'); 
        navigate('/login'); 
    }
    }, [navigate]);

    return (
<>
        <h1>Bem-vindo ao Dashboard!</h1>;
        </>
)
}

export default BoxDashboard;
