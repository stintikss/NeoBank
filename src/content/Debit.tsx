import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Debit: React.FC = () => {
    const navigate = useNavigate();

    //ХУКИ:

    //
    useEffect(() => {

    }, []);

    return (
      <>
        <div>
            <div className='flex gap-[35px] h-[550px] items-center'>
                <div className='bg-[#f2f3f5] rounded-[35px] h-[450px] w-[280px] text-center' style={{
                    backgroundImage: 'url(/Debit_Card.svg)',
                    backgroundSize: 'contain', // Изображение будет уменьшаться, чтобы поместиться в контейнер
                    backgroundRepeat: 'no-repeat', // Изображение не будет повторяться
                    backgroundPosition: 'center', // Изображение будет выровнено по центру
                }}>
                    <div className='h-[100px] flex flex-col justify-center'>
                       <p className='font-[600] text-[25px]'>Дебетовые карты</p> 
                        <p>Суперкэшбэк до 100%</p> 
                    </div>
                   
                </div>
                
                <div className='bg-[#f2f3f5] rounded-[35px] h-[450px] w-[280px] text-center' style={{
                    backgroundImage: 'url(/Credit_card.svg)',
                    backgroundSize: 'contain', // Изображение будет уменьшаться, чтобы поместиться в контейнер
                    backgroundRepeat: 'no-repeat', // Изображение не будет повторяться
                    backgroundPosition: 'center', // Изображение будет выровнено по центру
                }}>
                    <div className='h-[100px] flex flex-col justify-center'>
                       <p className='font-[600] text-[25px]'>Кредитные карты</p> 
                        <p>0 ₽ за обслуживание</p> 
                    </div>
                   
                </div>

                <div className='bg-[#f2f3f5] rounded-[35px] h-[450px] w-[280px] text-center' style={{
                    backgroundImage: 'url(/Invest.svg)',
                    backgroundSize: 'contain', // Изображение будет уменьшаться, чтобы поместиться в контейнер
                    backgroundRepeat: 'no-repeat', // Изображение не будет повторяться
                    backgroundPosition: 'center', // Изображение будет выровнено по центру
                }}>
                    <div className='h-[100px] flex flex-col justify-center'>
                       <p className='font-[600] text-[25px]'>Инвестиции</p> 
                        <p>Начните с 0 ₽</p> 
                    </div>
                   
                </div>
            </div>
        </div>
      </>
    );
};

export default Debit;