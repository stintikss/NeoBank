import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Advertisement: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const navigate = useNavigate();

    const [advertisement, setAdvertisement] = useState<boolean>(true)

    const closeModal = () => {
        setAdvertisement(false);
        onClose()
      };


  useEffect(() => {
    
  }, []);

  return (
    <>
        {advertisement && (
           <div
                style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Затемнение фона
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                animation: 'fadeIn 0.5s ease-out',
                }}
                onClick={closeModal}
            >
                <div
                style={{
                    backgroundImage: 'var(--NL_GRADIENT)',
                    padding: '40px',
                    borderRadius: '16px',
                    width: '400px',
                    textAlign: 'center',
                    animation: 'scaleUp 0.5s ease-out',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                }}
                className="flex flex-col space-y-6"
                >
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#fff', textShadow: '#474747 1px 0 10px',  }}>
                    🚀 Подпишитесь на наш Телеграмм!
                </h2>
                <p
                    style={{
                    fontSize: '16px',
                    color: '#fff',
                    opacity: 0.85,
                    lineHeight: '1.5',
                    }}
                    className='text-shadow'
                >
                    Присоединяйтесь к нашему сообществу и следите за новостями, обновлениями и полезным контентом.
                </p>
                <div className="flex justify-center">
                    <a
                    href="https://t.me/Stintikss1" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        backgroundColor: '#0088cc',
                        color: '#fff',
                        padding: '12px 24px',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'background-color 0.3s ease',
                    }}
                    className="hover:bg-blue-600"
                    >
                    Перейти в Телеграмм
                    </a>
                </div>
                </div>
            </div> 
        )}
        

      <style>{`
        :root {
          --NL_GRADIENT: linear-gradient(20deg, rgb(127 110 176), rgb(161 157 177));
          --AIR_COLOR: rgb(255 255 255 / 90%);
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes scaleUp {
          0% {
            transform: scale(0.9);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .hover\:bg-blue-600:hover {
          background-color: #006fa6;
        }
      `}</style>
    </>
  );
};

export default Advertisement;
