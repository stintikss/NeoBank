import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderHome from '../../components-module/HeaderHome';

const Support: React.FC = () => {
    const navigate = useNavigate();
    
    // Состояния для чата
    const [userMessage, setUserMessage] = useState<string>('');
    const [chatHistory, setChatHistory] = useState<any[]>([]); // История чата
    const [response, setResponse] = useState<string>(''); // Ответ банка
    
    // Пример JSON с ответами
    const jsonData = [
        { message: 'привет', response: 'Привет, чем могу помочь?' },
        { message: 'как дела', response: 'Все хорошо, спасибо, что спросили!' },
        { message: 'помощь', response: 'Что конкретно нужно? Чем могу помочь?' }
    ];

    // Эффект для загрузки истории чата из localStorage
    useEffect(() => {
        const savedChat = localStorage.getItem('chatHistory');
        if (savedChat) {
            setChatHistory(JSON.parse(savedChat));
        }
    }, []);

    // Функция для отправки сообщения
    const handleSendMessage = () => {
        if (userMessage.trim() === '') return; // Не отправлять пустое сообщение

        // Сохраняем сообщение пользователя в историю
        const newMessage = { sender: 'user', text: userMessage };
        const updatedHistory = [...chatHistory, newMessage];

        // Поиск ответа в jsonData
        const responseObj = jsonData.find(item => item.message.toLowerCase() === userMessage.toLowerCase());
        
        if (responseObj) {
            setResponse(responseObj.response);
            updatedHistory.push({ sender: 'bank', text: responseObj.response });
        } else {
            setResponse('Извините, я не понял вашего запроса.');
            updatedHistory.push({ sender: 'bank', text: 'Извините, я не понял вашего запроса.' });
        }

        // Обновляем историю чата
        setChatHistory(updatedHistory);

        // Сохраняем историю чата в localStorage
        localStorage.setItem('chatHistory', JSON.stringify(updatedHistory));

        // Очищаем инпут после отправки сообщения
        setUserMessage('');

        // Симулируем задержку ответа банка
        setTimeout(() => {
            const responseObj = jsonData.find(item => item.message.toLowerCase() === userMessage.toLowerCase());
            if (responseObj) {
                setResponse(responseObj.response);
                updatedHistory.push({ sender: 'bank', text: responseObj.response });
            } else {
                setResponse('Извините, я не понял вашего запроса.');
                updatedHistory.push({ sender: 'bank', text: 'Извините, я не понял вашего запроса.' });
            }
            setChatHistory(updatedHistory);
            localStorage.setItem('chatHistory', JSON.stringify(updatedHistory));
        }, 3000); // Ответ банка через 3 секунды
    };

    return (
      <>
        <div className='bg-[#ececec] w-full h-screen'>
            <div className='w-full flex justify-center'>
                <HeaderHome />  
            </div>
            <div className='h-[30px]'></div>
            <div className='w-full flex justify-center'>
                <div className='w-[1000px] flex flex-col bg-[#ffffff] p-4'>
                    <div className='h-[400px] overflow-y-auto'>
                        {chatHistory.map((chat, index) => (
                            <div key={index} className={`my-2 ${chat.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                <div
                                    className={`inline-block p-2 rounded-md ${chat.sender === 'user' ? 'bg-[#d1e7fd]' : 'bg-[#f1f1f1]'}`}
                                >
                                    {chat.text}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className='flex mt-4'>
                        <input
                            type='text'
                            className='w-[80%] p-2 border rounded-md'
                            placeholder='Напишите сообщение...'
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                        />
                        <button
                            onClick={handleSendMessage}
                            className='ml-2 p-2 bg-blue-500 text-white rounded-md'
                        >
                            Отправить
                        </button>
                    </div>
                </div>
            </div> 
        </div>
      </>
    );
};

export default Support;
