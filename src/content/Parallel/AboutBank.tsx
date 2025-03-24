import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AboutBank: React.FC = () => {
    const navigate = useNavigate();

    //ХУКИ:

    //
    useEffect(() => {

    }, []);

    return (
      <>
        <div className='w-full bg-[#bdbdbd87] h-[500px] justify-center flex '>
            <div className='flex justify-between w-[910px] items-center'>
                <div className='text-[#3d3a3a] mt-[-100px] flex jusitfy-start font-bold flex-col' style={{ fontFamily: "'Styrene A Web', sans-serif", position: "relative", overflow: "hidden"  }}>
                    <p className='text-[50px]'>The most popular <br/>bank in the future</p>
                    <p className='text-[25px]'>Сочетаем цифровой и физический опыт</p>
                </div>
                <div>
                    <img className='h-[700px] mt-[800px]' src='/phone.svg'/>
                </div>
            </div>
        </div>
        <div className='w-full bg-[white] h-[600px] justify-center flex border-b-2 border-[#9b9b9b]'>
            <div className='flex w-[910px] justify-center flex-col'>
                <div className='w-[900px]'>
                    <p className='text-[30px] font-bold text-[#252528e0]' style={{fontFamily: "Rubik, sans-serif"}}>Цифровой опыт</p>
                    <p className='text-[45px] font-bold text-[#252528e0] h-[230px] flex items-center' style={{fontFamily: "Rubik, sans-serif"}}>Лучшее <br/>банковское приложение <br/>будущего</p>
                </div>
                <div className='border-b-4 border-[red] h-[50px] w-[100px] flex'></div>
                <div className='h-[200px] flex items-center'>
                    <p className='text-[#1c1c2ce0] font-[500] text-[18px]' style={{fontFamily: "Rubik, sans-serif"}}>NeoBank — это инновации, удобство и скорость. <br/>В будущем — передовое мобильное приложение, <br/>интеллектуальные финансы и максимум удобства для клиентов.</p>
                </div>
            </div>
        </div>
        <div className='bg-[white] w-full h-[600px] items-center flex flex-col'>
            <div className='flex w-[910px] justify-center flex-col h-[210px]'>
                <div className='text-[#252528e0] text-[45px] font-bold' style={{fontFamily: "Rubik, sans-serif"}}>
                    <p>Награды не цель нашей работы, <br/>но получать их приятно</p>
                </div>
            </div>
            <div className='flex gap-[45px]'>
                <img src='/Job.png'/>
                <img src='/Soft.png'/>
                <img src='/Banking.png'/>
            </div>
        </div>
        
      </>
    );
};

export default AboutBank;