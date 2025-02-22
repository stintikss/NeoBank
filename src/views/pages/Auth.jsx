import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AlertComponent from "../../components-module/AlertComponent";
import SecretCode from '../../components-module/SecretCode';

const Auth = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState(""); // состояние для пароля
  const [isClicked, setIsClicked] = useState(false);
  const [showPage, setPage] = useState(true); 
  const [showSecretCode, setShowSecretCode] = useState(false);
  const [showHeader, setShowHeader] = useState(false)

  const [NewPassword, setNewPassword] = useState("");
  const [passwords, setPasswords] = useState([]);

  const [NameBD, setNameBD] = useState("?")
  

  const SecretCodeInStorage = localStorage.getItem('SecretCode');

  const [CodeInput, setCodeInput] = useState('')

  useEffect(() => {
    const NameBDLocal = localStorage.getItem("Name"); // Получаем значение
    if (NameBDLocal) {
      setNameBD(NameBDLocal); // Обновляем стейт
    }
  }, []); // Выполнится 1 раз при монтировании

  useEffect(() => {
    if (SecretCodeInStorage) {
      setShowSecretCode(true);
      setShowHeader(true)
      setPage(false); 
    }
  });

  useEffect(() => {
    const fetchPasswords = async () => {
      const response = await fetch("/passwords.json"); // Путь для файла в public
      const data = await response.json();
      setPasswords(data.passwords); // Устанавливаем пароли в state
    };
    fetchPasswords();
  }, []);

  // Функция для выбора случайного пароля из массива
  const generateRandomPassword = () => {
    if (passwords.length > 0) {
      const randomPassword = passwords[Math.floor(Math.random() * passwords.length)];
      setPassword(randomPassword); // Устанавливаем выбранный пароль в состояние password
    }
  };

  const handleButtonClick = () => {
    setIsClicked(true); 
  };

  const ButtonCodeReq = () => {
    const CodeBD = localStorage.getItem('SecretCode');
    if(CodeInput === CodeBD) {
        navigate('/home')
    } else {
        alert('Не успех')
    }
  }

  const GoPages = () => {
    navigate('/home')
  }



  return (
    <>
        {showHeader ? (
            <>
                <header className="flex justify-center h-[145px]">
                    <div className="flex justify-between w-[2264px] items-center px-8">
                    <img 
                        src="/LOGO (1).svg" 
                        alt="NeonBank"
                        className="drag-none select-none h-[90px]"
                    />
                    <div className="flex items-center">
                        <img 
                            src="/Frame.svg" 
                            alt="Exit"
                            className="drag-none select-none h-[50px]"
                        />
                        <p>Сменить пользователя</p>
                    </div>
                    </div>
                </header>
            </>
        ) : (
            <>
                <header className="flex justify-center h-[145px]">
                    <div className="flex justify-between w-[2264px] items-center px-8">
                    <img 
                        src="/LOGO (1).svg" 
                        alt="NeonBank"
                        className="drag-none select-none h-[90px] cursor-pointer"
                        onClick={GoPages}
                    />
                    <button 
                        className="bg-[#F0F0F0] h-[40px] w-[190px] rounded-[15px] font-Rubik cursor-pointer"
                        style={{ fontFamily: 'Rubik, sans-serif' }}>
                        🚀 Стать клиентом
                    </button>
                    </div>
                </header>
            </>
        )}

      {showSecretCode && (
        <>
            <div className="w-full h-[1000px] flex justify-center items-center">
                <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-col">
                        <p className="font-[500] text-[30px]" style={{ fontFamily: 'Rubik, sans-serif' }}>Привет, {NameBD}</p>
                        <p className="font-[500] text-[30px]" style={{ fontFamily: 'Rubik, sans-serif' }}>Войдите в НеоБанк-Онлайн</p>
                    </div>
                    <div className="flex flex-col gap-[25px] mt-[5px]">
                       <input 
                        onChange={function(ef) { setCodeInput(ef.target.value); }}
                        placeholder="Введите секретный код" 
                        className="bg-[#EAEAED] rounded-[10px] h-[60px] pl-[15px] focus:outline-none focus:ring-0 w-full"
                        />
                        <button onClick={ButtonCodeReq} className="bg-[#F3F5F6] w-full h-[55px] rounded-[10px]">Вперёд</button>
                    </div>
                    <p className="text-center">Забыли код?</p>
                </div>
            </div>
        </>
      )} 
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
                value={login} 
                onChange={(e) => setLogin(e.target.value)} 
                />
                <input
                id="password"
                type="password"
                placeholder="Пароль"
                className="bg-[#EAEAED] rounded-[10px] h-[60px] pl-[15px] focus:outline-none focus:ring-0"
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                />
                <div className="h-[140px] flex flex-col items-center justify-center gap-[10px] mt-[-10px]">
                <div className="w-full flex justify-end gap-[0px]">
                    <button 
                    className="cursor-pointer"
                    onClick={generateRandomPassword}>
                        Подобрать надежный пароль
                    </button>
                </div>
                <button onClick={handleButtonClick} className="bg-[#F3F5F6] w-full h-[55px] rounded-[10px] mt-[5px] cursor-pointer">
                    Вперёд
                </button>
                <AlertComponent isClicked={isClicked} login={login} password={password} /> 
                <p>Войти по номеру телефона</p>
                </div>
            </div>
            </div>
        </div>)}
    </>
  );
};

export default Auth;
