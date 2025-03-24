import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin: React.FC = () => {
    const navigate = useNavigate();
    const NameBD = localStorage.getItem('Name');

    // Хуки:
    const [defaultRegister, setDefaultRegister] = useState<boolean>(false);
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [attempts, setAttempts] = useState<number>(0);
    const [amount, setAmount] = useState<number>(0);
    const [name, setName] = useState<string>(localStorage.getItem('Name') || '');
    const [activeContent, setActiveContent] = useState<string>(''); 
    const [money, setMoney] = useState<string>(localStorage.getItem('money') || '0');

    // Эффект для сброса defaultRegister
    useEffect(() => {
        setDefaultRegister(false);
    }, []);

    // Обработчики изменений для login и password
    const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);  
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);  
    };

    // Обработчик входа
    const enterButton = () => {
        if (login !== 'Admin' || password !== '12345') {
            setAttempts(prev => {
                const newAttempts = prev + 1;
                if (newAttempts >= 3) {
                    navigate('/home');  
                }
                return newAttempts;  
            });
            alert(`Не верно, осталось ${2 - attempts} попытки`);
        } else {
            setDefaultRegister(true); 
        }
    };

    // Обработчик клика по содержанию
    const handleClick = (content: string) => {
        setActiveContent(content);
    };

    // Обработчик изменения суммы
    const handleAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        
        // Преобразуем строку в число (например, через parseFloat)
        const parsedValue = value ? parseFloat(value) : 0;  // Если пустое значение, устанавливаем 0

        setAmount(parsedValue);  // Обновляем состояние с числовым значением
    };

    // Обработчик добавления денег
    const Add = () => {
        // Получаем текущее значение денег из localStorage и преобразуем в число
        const currentMoney = parseFloat(localStorage.getItem('money') || '0');
    
        // Преобразуем введенное значение: заменяем запятую на точку и конвертируем в число
        const parsedAmount = parseFloat(amount.toString().replace(',', '.')) || 0;
    
        // Считаем итоговую сумму
        const newTotal = currentMoney + parsedAmount;
    
        // Сохраняем новое значение в localStorage
        localStorage.setItem('money', newTotal.toString());
    
        // Обновляем состояние для ререндера UI
        setMoney(newTotal.toString());
    
        alert(`Добавлено: ${parsedAmount} ₽. Теперь на счету: ${newTotal} ₽`);
    };
    

    return (
      <>
        {defaultRegister ? (
            <>
                <div className='flex w-[1000px] justify-between'>
                    <div className=''>
                        <p className='text-[20px] font-bold'>Приветствуем, {name}</p>
                        <ul>
                            <li className='cursor-pointer' onClick={() => handleClick('changeName')}>Сменить имя</li>
                            <li className='cursor-pointer' onClick={() => handleClick('addMoney')}>Выдать денег</li>
                            <li className='cursor-pointer' onClick={() => handleClick('viewHistory')}>Посмотреть историю</li>
                        </ul>
                    </div>
                    
                    {/* В зависимости от выбранного содержимого */}
                    {activeContent === 'changeName' && <div>Введите новое имя:</div>}
                    
                    {activeContent === 'addMoney' && 
                    <div>
                        <div className='flex gap-[10px] flex-col'>
                            <p>Введите имя кому выдать деньги(Имя) и сумму</p>
                            <input 
                                placeholder='Имя' 
                                className='bg-[#dedede]' 
                            />
                            <input 
                                placeholder='Сколько выдать' 
                                className='bg-[#dedede]' 
                                value={amount} 
                                onChange={handleAmount}
                            />
                            <button 
                                className='bg-[#a7a7a7] w-[100px] rounded-[5px]' 
                                onClick={Add}
                            >
                                Добавить
                            </button>
                        </div>
                    </div>}
                    
                    {activeContent === 'viewHistory' && <div>История ваших транзакций:</div>}
                </div>
            </>
        ) : (
            <>
                <div className='flex flex-col w-full items-center gap-[10px] justify-center h-screen'>
                    <h1>Добро пожаловать на страницу "Админ"</h1>
                    <p>Эта страница предназначена исключительно администраторам банка</p>
                    <div className='flex flex-col w-[200px] items-center h-[300px] justify-center gap-[10px]'>
                    <input
                        type="password"
                        placeholder="Логин"
                        className="bg-[#dfdfdf] rounded-[5px] pl-[10px]"
                        value={login}  
                        onChange={handleLoginChange}  
                    />
                    <input
                        type="password"
                        placeholder="Пароль"
                        className="bg-[#dfdfdf] rounded-[5px] pl-[10px]"
                        value={password}  
                        onChange={handlePasswordChange}
                    />
                        <button 
                            className='bg-[#eeeeee] w-full rounded-[5px]' 
                            onClick={enterButton}
                        >
                            Войти
                        </button>
                    </div>
                </div>
            </>
        )}
      </>
    );
};

export default Admin;
