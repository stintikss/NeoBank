import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../content/Profile";

const SecretCode = () => {
    const [codeInput, setCodeInput] = useState(""); 
    const [nameInput, setNameInput] = useState("");
    const [phoneInput, setPhoneInput] = useState(""); // Поле для номера телефона
    const [isNameEntered, setIsNameEntered] = useState(false); // Флаг ввода имени
    const [allowCodeName, setAllowCodeName] = useState(true);

    const navigate = useNavigate();

    const CodeBD = localStorage.getItem("SecretCode");
    const NameBD = localStorage.getItem("Name");

    useEffect(() => {
        if (CodeBD) {
            setAllowCodeName(false);
        }

        if (CodeBD && NameBD) {
            setAllowCodeName("Register");
        }
    }, []);

    const handleCodeSubmit = () => {
        if (codeInput) {
            localStorage.setItem("SecretCode", codeInput);
            window.location.reload();
        }
    };

    const handleNameSubmit = () => {
        setIsNameEntered(true); // Показываем поле для номера
        setPhoneInput(""); // Очищаем поле для номера
    };

    const handlePhoneSubmit = () => {
        localStorage.setItem("Name", nameInput);
        localStorage.setItem("Phone", phoneInput); // Сохраняем номер телефона

        const cameFromStartClient = location.state?.fromStartClient;

        if (cameFromStartClient) {
            navigate("/startclient");
        } else {
            navigate("/home");
        }
    };

    const backPages = () => {
        navigate("/home");
    };

    return (
        <>
            {allowCodeName === "Register" ? (
                <>
                    <header className="flex w-full">
                        <div className="flex items-center w-[50.8%] justify-between pl-[100px]">
                            <p onClick={backPages} className="cursor-pointer">&#8592; Назад</p>
                            <img
                                onClick={backPages}
                                src="/LOGO (1).svg"
                                alt="NeonBank"
                                className="drag-none select-none h-[100px] cursor-pointer"
                            />
                        </div>
                    </header>
                    <Profile />
                </>
            ) : allowCodeName ? (
                <>
                    <header className="flex justify-center">
                        <img src="/LOGO (1).svg" alt="NeonBank" className="drag-none select-none h-[100px]" />
                    </header>
                    <div className="h-[1000px] justify-center flex flex-col gap-[40px]">
                        <div className="w-full flex justify-center">
                            <p className="font-[500] text-[30px]" style={{ fontFamily: "Rubik, sans-serif" }}>
                                Создать уникальный код
                            </p>
                        </div>
                        <div className="w-full flex items-center flex-col">
                            <div className="w-[500px] flex flex-col gap-[25px]">
                                <input
                                    onChange={(e) => setCodeInput(e.target.value)}
                                    className="bg-[#EAEAED] rounded-[10px] h-[60px] pl-[15px] focus:outline-none focus:ring-0 w-full"
                                    placeholder="Введите новый код"
                                />
                                <button onClick={handleCodeSubmit} className="bg-[#F3F5F6] w-full h-[55px] rounded-[10px]">
                                    Вперёд
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <header className="flex justify-center">
                        <img src="/LOGO (1).svg" alt="NeonBank" className="drag-none select-none h-[100px]" />
                    </header>
                    <div className="h-[1000px] justify-center flex flex-col gap-[40px]">
                        <div className="w-full flex justify-center">
                            <p className="font-[500] text-[30px]" style={{ fontFamily: "Rubik, sans-serif" }}>
                                {isNameEntered ? "Введите ваш номер телефона" : "Напишите свое имя"}
                            </p>
                        </div>
                        <div className="w-full flex items-center flex-col">
                            <div className="w-[500px] flex flex-col gap-[25px]">
                                {!isNameEntered ? (
                                    <>
                                        <input
                                            onChange={(e) => setNameInput(e.target.value)}
                                            className="bg-[#EAEAED] rounded-[10px] h-[60px] pl-[15px] focus:outline-none focus:ring-0 w-full"
                                            placeholder="Введите имя"
                                        />
                                        <button onClick={handleNameSubmit} className="bg-[#F3F5F6] w-full h-[55px] rounded-[10px]">
                                            Вперёд
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <input
                                            value={phoneInput} // Привязываем значение
                                            onChange={(e) => setPhoneInput(e.target.value)}
                                            className="bg-[#EAEAED] rounded-[10px] h-[60px] pl-[15px] focus:outline-none focus:ring-0 w-full"
                                            placeholder="Введите номер телефона"
                                        />
                                        <button onClick={handlePhoneSubmit} className="bg-[#F3F5F6] w-full h-[55px] rounded-[10px]">
                                            Завершить
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default SecretCode;
