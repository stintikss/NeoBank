import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const HeaderHome: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    // ХУКИ:
    const [active, setActive] = useState('Главная');
    const [button, setButton] = useState<boolean>(true);

    // Чтение из localStorage при монтировании компонента
    useEffect(() => {
        const currentPath = location.pathname;

        if (currentPath === '/home') {
            setActive('Главная');
        } else if (currentPath === '/payments') {
            setActive('Платежи');
        } else if (currentPath === '/history') {
            setActive('История');
        } else if (currentPath === '/support') {
            setActive('Поддержка');
        } else if (currentPath.includes('/transfer/')) {
            setActive('Платежи'); 
        }

        setButton(!(currentPath === '/support' || currentPath === '/history' || currentPath.includes('/transfer/')));
    }, [location.pathname]);

    const handleClick = (page: string, path: string) => {
        setActive(page);
        navigate(path);
    };

    const generateRandomString = (length = 10) => {
        return Math.random().toString(36).substring(2, length + 2);
    };

    const handleRedirect = () => {
        const randomPath = generateRandomString();
        const storedText = localStorage.getItem("text") || "";
        const storedName = localStorage.getItem("Phone") || "";

        localStorage.setItem(`transfer_${randomPath}`, storedText);
        localStorage.setItem(`transfer_name_${randomPath}`, storedName);

        window.location.href = `/transfer/${randomPath}/${encodeURIComponent(storedName)}`;
    };

    const handlePaymentsRedirect = () => {
        const randomPath = generateRandomString();
        const storedText = localStorage.getItem("text") || "";
        const storedName = localStorage.getItem("Phone") || "";

        localStorage.setItem(`transfer_${randomPath}`, storedText);
        localStorage.setItem(`transfer_name_${randomPath}`, storedName);

        navigate(`/transfer/${randomPath}/${encodeURIComponent(storedName)}`);
        setActive('Платежи'); 
    };

    return (
        <>
            <header className={`flex justify-between h-[65px] ${location.pathname === '/support' ? 'items-center pt-[0px] mt-[30px]' : 'pt-[30px]'}`}>
                <ul className='flex text-[20px] gap-[50px]' style={{ fontFamily: "Rubik, sans-serif" }}>
                    <li 
                        className={`cursor-pointer ${active === 'Главная' ? 'border-b-2 border-[#5b6deb]' : ''}`}
                        onClick={() => handleClick('Главная', '/')}
                    >
                        Главная
                    </li>
                    <li 
                        className={`cursor-pointer ${active === 'Платежи' ? 'border-b-2 border-[#5b6deb]' : ''}`}
                        onClick={handlePaymentsRedirect} 
                    >
                        Платежи
                    </li>
                    <li 
                        className={`cursor-pointer ${active === 'История' ? 'border-b-2 border-[#5b6deb]' : ''}`}
                        onClick={() => handleClick('История', '/history')}
                    >
                        История
                    </li>
                    <li 
                        className={`cursor-pointer ${active === 'Поддержка' ? 'border-b-2 border-[#5b6deb]' : ''}`}
                        onClick={() => handleClick('Поддержка', '/support')}
                    >
                        Поддержка
                    </li>
                </ul>
                {button && (
                    <div className='flex gap-[15px] items-center'>
                        <img src='/search.png' className='h-[50px]' />
                        <img src='/profile.png' className='h-[50px]' onClick={() => { navigate('/profile'); }} />
                        <button className='bg-[#1212131a] rounded-[5px] w-[80px] h-[35px]'
                            onClick={() => {navigate('/login')}}
                        >
                            Выйти
                        </button>
                    </div>
                )}
            </header>
        </>
    );
};

export default HeaderHome;
