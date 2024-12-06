import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BoxDashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) navigate('/');
    }, [navigate]);

    return <h1>Bem-vindo ao Dashboard!</h1>;
}

export default BoxDashboard;
