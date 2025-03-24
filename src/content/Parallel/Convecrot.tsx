import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Convecrot: React.FC = () => {
    const navigate = useNavigate();

    //ХУКИ:
    const [seconds, setSeconds] = useState("");
    const [result, setResult] = useState<string | null>(null);
    //
    useEffect(() => {

    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSeconds(event.target.value);
      };

      const mainConvert = () => {
        return Number(seconds) * 30
      }
    
      const handleConvert = () => {
        setResult(`${seconds} секунд = ${Number(seconds) * 30} рублей`);
      };
    
      return (
        <div className="bg-white w-full h-[600px] flex justify-center items-center">
          <div className="bg-[#dae6c7] w-[910px] h-[500px] rounded-[15px] p-[20px] flex flex-col justify-center items-center">
            <p className="text-[20px] text-center" style={{ fontFamily: "Rubik, sans-serif" }}>
              Представляем вашему вниманию нашу новую разработку: <br />
              "Конвертер Валют". Введите количество секунд, которое хотите <br />
              посчитать, и увидите сколько это в рублях.
            </p>
            <div className="flex flex-col gap-4 w-full max-w-[400px] mt-4">
              <input
                className="border border-gray-400 p-2 rounded-lg w-full text-center"
                type="number"
                placeholder="Введите кол-во секунд"
                value={seconds}
                onChange={handleChange}
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                onClick={handleConvert}
              >
                Конвертировать
              </button>
              {result && <p className="text-[25px] text-gray-700">{result}</p>}
            </div>
          </div>
        </div>
      );
    };

export default Convecrot;