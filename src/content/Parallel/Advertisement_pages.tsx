import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Advertisement_pages: React.FC = () => {
    const [showTelegram, setShowTelegram] = useState<boolean>(false);
    const [adText, setAdText] = useState<string>("");

    useEffect(() => {
        const randomChance = Math.random(); 

        if (randomChance <= 0.55) { 
            setShowTelegram(true);
            setAdText('Telegram'); 
        } else if (randomChance >= 0.45 ) {
            setShowTelegram(false);  
            setAdText('Github');
        }
    }, []); 

    return (
        <>
        {showTelegram && (
          <div className="w-full flex justify-center items-center py-8 rounded-lg shadow-lg bg-[white]">
              <div className="text-center max-w-xs w-full bg-white p-6 rounded-lg shadow-md">
                  <img src="/telegram.svg" alt="Telegram" className="mx-auto mb-4 h-12" />
                  <p className="text-xl font-semibold text-gray-800 mb-4">
                      Подпишись на наш канал 🚀 и будь в курсе всех новинок! 📱 Читай первым!
                  </p>
                  <Link to="https://t.me/Stintikss1" target="_blank">
                    <button className="bg-[#4c8b93] text-white py-2 px-6 rounded-lg hover:bg-[#357b82] transition-all">
                        Перейти в Telegram
                    </button>
                  </Link>
                  <p className="bg-[] text-[#969696] py-2 px-6 rounded-lg cursor-pointer hover:text-[black] transition-colors duration-500">
                            Убрать рекламу
                    </p>
              </div>
          </div>
        )}

        {!showTelegram && (
            <>
            <div className='flex'>
                <div className="w-full flex justify-center items-center py-8 rounded-lg shadow-lg">
                    <div className="text-center max-w-xs w-full bg-white p-6 rounded-lg shadow-md">
                        <img src="/github.svg" alt="GitHub" className="mx-auto mb-4 h-12" />
                        <p className="text-xl font-semibold text-gray-800 mb-4">
                            Следи за нашим проектом на GitHub 🛠️ и будь частью сообщества разработчиков! 🌍 Подпишись и получай обновления!
                        </p>
                        <Link to="https://github.com/stintikss" target="_blank">
                            <button className="bg-[#333333] text-white py-2 px-6 rounded-lg hover:bg-[#555555] transition-all">
                                Перейти на GitHub
                            </button>
                        </Link>
                        <p className="bg-[] text-[#969696] py-2 px-6 rounded-lg cursor-pointer hover:text-[black] transition-colors duration-500">
                            Убрать рекламу
                        </p>
                    </div>
                    
                </div>
                <div>
                </div>
            </div>
          
          </>
        )}
      </>
    );
};

export default Advertisement_pages;
