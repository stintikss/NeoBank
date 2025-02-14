import { useState, useEffect } from "react"; // Импорт useState и useEffect
import { useNavigate } from "react-router-dom";
import AlertComponent from "../../components-module/AlertComponent"; // Импорт компонента Alert
import SecretCode from '../../components-module/SecretCode';

const Auth = () => {
  const navigate = useNavigate();

  // Состояние для хранения значений инпутов
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [showPage, setPage] = useState(true); // Страница по умолчанию показывается
  const [showSecretCode, setShowSecretCode] = useState(false);

  const SecretCodeInStorage = localStorage.getItem('SecretCode');

  // Проверка наличия секретного кода при монтировании компонента
  useEffect(() => {
    if (SecretCodeInStorage) {
      setShowSecretCode(true);
      setPage(false); // Скрываем страницу входа
    }
  });

  const handleButtonClick = () => {
    setIsClicked(true); // Меняем состояние для показа AlertComponent
  };

  return (
    <>
      <header className="flex justify-center h-[145px]">
        <div className="flex justify-between w-[2264px] items-center px-8">
          <img 
            src="/LOGO (1).svg" 
            alt="NeonBank"
            className="drag-none select-none h-[90px]"
          />
          <button 
            className="bg-[#F0F0F0] h-[40px] w-[190px] rounded-[15px] font-Rubik"
            style={{ fontFamily: 'Rubik, sans-serif' }}>
            🚀 Стать клиентом
          </button>
        </div>
      </header>

      {showSecretCode && <SecretCode />} {/* Если есть секретный код, показываем этот компонент */}
      {showPage && (
        <div className="w-full h-[1000px] flex justify-center items-center">
            <div className="flex w-[500px] justify-center flex-col">
            <div className="flex flex-col justify-start w-full">
                <p className="font-[500] text-[30px]" style={{ fontFamily: 'Rubik, sans-serif' }}>Привет! Войдите в</p>
                <p className="font-[500] text-[30px]" style={{ fontFamily: 'Rubik, sans-serif' }}>НеоБанк-Онлайн</p>
            </div>
            <div className="flex flex-col w-full gap-[17px] mt-[20px]">
                <input
                id="login"
                type="text"
                placeholder="Логин"
                className="bg-[#EAEAED] rounded-[10px] h-[60px] pl-[15px] focus:outline-none focus:ring-0"
                value={login} // Значение инпута привязано к состоянию
                onChange={(e) => setLogin(e.target.value)} // Обновляем состояние при вводе
                />
                <input
                id="password"
                type="password"
                placeholder="Пароль"
                className="bg-[#EAEAED] rounded-[10px] h-[60px] pl-[15px] focus:outline-none focus:ring-0"
                value={password} // Значение инпута привязано к состоянию
                onChange={(e) => setPassword(e.target.value)} // Обновляем состояние при вводе
                />
                <div className="h-[115px] flex flex-col items-center justify-center gap-[10px]">
                <button onClick={handleButtonClick} className="bg-[#F3F5F6] w-full h-[55px] rounded-[10px]">
                    Вперёд
                </button>
                <AlertComponent isClicked={isClicked} login={login} password={password} /> {/* Передаем данные в AlertComponent */}
                <p>Войти по номеру телефона</p>
                </div>
            </div>
            </div>
        </div>)}
    </>
  );
};

export default Auth;
