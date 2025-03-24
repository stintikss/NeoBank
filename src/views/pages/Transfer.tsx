import React, { useState } from "react";
import HeaderHome from "../../components-module/HeaderHome";
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBackIcon from '@mui/icons-material/South';
import { useNavigate } from "react-router-dom";

const CloseButton: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <button
      onClick={onClose}
      className="p-2 rounded-full hover:bg-gray-200 transition"
      aria-label="Закрыть"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 text-gray-500"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </button>
  );
};

const Transfer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      {isVisible ? (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <div className="relative p-6 bg-white shadow-lg rounded-lg w-96 text-center border border-gray-300">
            <h2 className="text-xl font-semibold text-red-600 mb-2">Уважаемые клиенты!</h2>
            <p className="text-gray-700 mb-2">
              В связи с техническими работами переводы временно осуществляются через{" "}
              <span className="font-semibold">Donation Alerts</span>.
            </p>
            <p className="text-gray-700 font-medium mb-2">
              Обратите внимание, что зачисление средств может занять <span className="font-semibold">до 2 дней</span>.
            </p>
            <p className="text-gray-600">Приносим извинения за возможные неудобства и благодарим за понимание!</p>
            <div className="absolute top-2 right-2">
              <CloseButton onClose={() => setIsVisible(false)} />
            </div>
          </div>
        </div> 
      ) : (
        <>
            <div className="w-full h-screen flex flex-col items-center">
                <div className="flex w-full justify-center">
                    <div className="w-[1900px] flex justify-center">
                        <HeaderHome /> 
                    </div> 
                </div>
                <div className="w-[500px] flex justify-center h-[500px] items-center flex-col">
                    <div className="">
                        <div className="w-[500px] justify-start flex items-center gap-[10px]" onClick={() => {window.history.back()}}>
                            <div className="w-[30px] h-[30px] bg-[#F0F1F3] rounded-full flex justify-center items-center">
                              <ArrowBackIcon style={{fontSize: 20, strokeWidth: 1}} className="rotate-90"/>   
                            </div>
                            <span style={{ fontFamily: '"Open Sans", sans-serif' }} className="text-[16.5px] font-[430] text-[#030306e0]">Назад</span>
                        </div>
                        <div>
                            <span style={{fontFamily: "'Roboto', sans-serif" }}>Перевод по номеру телефона</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>Текущий счет</span>
                            <span>0.00</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
      )}

      <style>
        {`
            :root {
                --font-sans: "Open Sans", sans-serif;
            }
        `}
      </style>
    </>
  );
};

export default Transfer;
