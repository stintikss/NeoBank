import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

const Auth1: React.FC = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPage, setShowPage] = useState<boolean>(true);
  const [showSecretCode, setShowSecretCode] = useState<boolean>(false);
  const [showHeader, setShowHeader] = useState<boolean>(false);

  const [newPassword, setNewPassword] = useState<string>("");
  const [passwords, setPasswords] = useState<string[]>([]);

  const [nameBD, setNameBD] = useState<string>("?");
  const [codeInput, setCodeInput] = useState<string>("");

  const [error, setError] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string>('');

  const secretCodeInStorage = localStorage.getItem("SecretCode");

  

  useEffect(() => {
    const nameBDLocal = localStorage.getItem("Name");
    if (nameBDLocal) {
      setNameBD(nameBDLocal);
    }
  }, []);

  useEffect(() => {
    if (secretCodeInStorage) {
      setShowSecretCode(true);
      setShowHeader(true);
      setShowPage(false);
    }
  }, [secretCodeInStorage]);

  useEffect(() => {
    const fetchPasswords = async () => {
      try {
        const response = await fetch("/passwords.json");
        const data = await response.json();
        setPasswords(data.passwords);
      } catch (error) {
        console.error("Error fetching passwords:", error);
      }
    };
    fetchPasswords();
  }, []);

  const generateRandomPassword = () => {
    if (passwords.length > 0) {
      const randomPassword =
        passwords[Math.floor(Math.random() * passwords.length)];
      setPassword(randomPassword);
    }
  };

  const handleButtonClick = () => {
    if (login.length <= 5) {
      setError(true);
      setErrorText('Маленький логин');
      return; // Выходим, чтобы не проверять пароль
    } 
    if (login.length > 10) {
      setError(true);
      setErrorText('Длинный логин');
      return;
    }
  
    if (password.length <= 6) {
      setError(true);
      setErrorText('Маленький пароль');
      return;
    }
  
    setError(false);
    setErrorText('');
    localStorage.setItem("login", login);
    localStorage.setItem("password", password);
    navigate('/home')
  };
  

  const handleCodeSubmit = () => {
    const storedCode = localStorage.getItem("SecretCode");
    if (codeInput === storedCode) {
      navigate("/home");
    } else {
      alert("Не успех");
    }
  };

  const goToHome = () => {
    navigate("/home");
  };

  const StartClient = () => {
    navigate('/startclient')
  }

  return (
    <>
      {showHeader ? (
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
                style={{cursor: "pointer"}}
                onClick={() => {localStorage.clear(); window.location.reload()}}
              />
              <p onClick={() => {localStorage.clear(); window.location.reload()}} style={{cursor: "pointer", fontFamily: "Rubik, sans-serif"}}>Сменить пользователя</p>
            </div>
          </div>
        </header>
      ) : (
        <header className="flex justify-center h-[145px]">
          <div className="flex justify-between w-[2264px] items-center px-8">
            <img
              src="/LOGO (1).svg"
              alt="NeonBank"
              className="drag-none select-none h-[90px] cursor-pointer"
              onClick={goToHome}
            />
            <button
              onClick={() => navigate('/startclient')}
              className="bg-[#F0F0F0] h-[40px] w-[190px] rounded-[15px] font-Rubik cursor-pointer"
              style={{ fontFamily: "Rubik, sans-serif" }}
            >
              🚀 Стать клиентом
            </button>
          </div>
        </header>
      )}

      {showSecretCode && (
        <div className="w-full h-[1000px] flex justify-center items-center">
          <div className="flex flex-col gap-[10px]">
            <div className="flex flex-col">
              <p
                className="font-[500] text-[30px]"
                style={{ fontFamily: "Rubik, sans-serif" }}
              >
                Привет, {nameBD}
              </p>
              <p
                className="font-[500] text-[30px]"
                style={{ fontFamily: "Rubik, sans-serif" }}
              >
                Войдите в НеоБанк-Онлайн
              </p>
            </div>
            <div className="flex flex-col gap-[25px] mt-[5px]">
              <input
                onChange={(e) => setCodeInput(e.target.value)}
                placeholder="Введите секретный код"
                className="bg-[#EAEAED] rounded-[10px] h-[60px] pl-[15px] focus:outline-none focus:ring-0 w-full"
              />
              <button
                onClick={handleCodeSubmit}
                className="bg-[#F3F5F6] w-full h-[55px] rounded-[10px]"
              >
                Вперёд
              </button>
            </div>
            <p className="text-center">Забыли код?</p>
          </div>
        </div>
      )}

      {showPage && (
        <div className="w-full h-[1000px] flex justify-center items-center">
          <div className="flex w-[500px] justify-center flex-col">
            <div className="flex flex-col justify-start w-full">
              <p
                className="font-[500] text-[30px]"
                style={{ fontFamily: "Rubik, sans-serif" }}
              >
                Привет! Зарегистрируйся в
              </p>
              <p
                className="font-[500] text-[30px]"
                style={{ fontFamily: "Rubik, sans-serif" }}
              >
                НеоБанк-Онлайн
              </p>
            </div>
            <div className="flex flex-col w-full gap-[17px] mt-[20px]">
            <input
              id="login"
              type="text"
              placeholder="Логин"
              className="bg-[#EAEAED] rounded-[10px] h-[60px] pl-[15px] focus:outline-none focus:ring-0"
              value={login}
              onChange={(e) => {
                const value = e.target.value;
                setLogin(value);

                if (value.length <= 5) {
                  setError(true);
                  setErrorText("Маленький логин");
                } else if (value.length > 10) {
                  setError(true);
                  setErrorText("Длинный логин");
                } else {
                  setError(false);
                  setErrorText("");
                }
              }}
            />

            <input
              id="password"
              type="password"
              placeholder="Пароль"
              className="bg-[#EAEAED] rounded-[10px] h-[60px] pl-[15px] focus:outline-none focus:ring-0"
              value={password}
              onChange={(e) => {
                const value = e.target.value;
                setPassword(value);

                if (value.length <= 6) {
                  setError(true);
                  setErrorText("Маленький пароль");
                } else {
                  setError(false);
                  setErrorText("");
                }
              }} />
              <div className={`flex flex-col items-center justify-center gap-[10px] mt-[-10px] ${error ? 'h-[215px]' : 'h-[175px]'}`}>
                <div className="w-full flex justify-end">
                  <button className="cursor-pointer" onClick={generateRandomPassword}>
                    Подобрать надежный пароль
                  </button>
                </div>
                <button
                  onClick={handleButtonClick}
                  className="bg-[#F3F5F6] w-full h-[55px] rounded-[10px] mt-[5px] cursor-pointer"
                >
                  Вперёд
                </button>
                {error && <div className="text-[red] text-[20px] font-[600]" style={{fontFamily: "Rubik, sans-serif"}}>{errorText}</div>}
                <p>Войти по номеру телефона</p>
                <p>Я сотрудник банка</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Auth1;