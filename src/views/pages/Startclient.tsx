import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Advertisement from "../../components-module/Advertisement";
import { Link } from 'react-router-dom';
import clsx from "clsx";
import Debit from "../../content/Debit";
import Buisness from "../../content/Buisness";
import Advertisement_pages from "../../content/Parallel/Advertisement_pages";
import AboutBank from "../../content/Parallel/AboutBank";


enum PageType {
    Home = "HOME",
    About = "ABOUT",
    Contact = "CONTACT",
  }

const Startclient: React.FC = () => {
    const navigate = useNavigate();

    const [register, setRegister] = useState<boolean>(true);
    const [isBlockVisible, setIsBlockVisible] = useState<boolean>(true);
    const [isModalClosed, setIsModalClosed] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [textColor, setTextColor] = useState<string>("");
    const [startClient, setStartClient] = useState<boolean>(false);
    const [active, setActive] = useState("Продукты");
    const [login, setLogin] = useState(localStorage.getItem("login") || "");
    const [password, setPassword] = useState(localStorage.getItem("password") || "");
    const [newCard, setNewCard] = useState<boolean>(false)

    const [adv, setAdv] = useState<boolean>(false)
    
    const [page, setPage] = useState<PageType>(PageType.Home);

    const [roadMap, setRoadMap] = useState<boolean>(false)
    const [aboutBank, setAboutBank] = useState<boolean>(false)
    

    useEffect(() => {
        const loginBD = localStorage.getItem("login");
        const passwordBD = localStorage.getItem("password");

        if (login !== localStorage.getItem("login") && password !== localStorage.getItem("password")) {
            localStorage.removeItem("ClickButtonAccept");
        }

        const ClickButtonAccept = localStorage.getItem('ClickButtonAccept')

        if (!loginBD || !passwordBD) {
            setRegister(false);
            setStartClient(true)
            setNewCard(true)
        }

        if(ClickButtonAccept) {
            setRegister(false)
            setStartClient(true);
            setNewCard(true)
        }

        const storedName = localStorage.getItem("Name") || "Имя неопределенно";
        setName(storedName);
        setTextColor(
            storedName !== "Имя неопределенно"
                ? "text-gray-900"
                : "text-red-500 cursor-pointer italic underline decoration-wavy decoration-blue-600 text-xl"
        );

    }, []);

    const handleNameClick = () => {
        if (name === "Имя неопределенно") {
            navigate("/profile", { state: { fromStartClient: true } });
        }
    };

    const handleCloseModal = () => {
        setIsModalClosed(true);
    };

    const mainStartClient = () => {
        if (isModalClosed) {
            setStartClient(true);
            setNewCard(true)
            setRegister(false)
            localStorage.setItem('ClickButtonAccept', 'true')
        }
    };

    const handleClick = (item: string) => {
        if(item === "Главная") {
            navigate('/home')
        } else if (item === "РОАДМАПА") {
            setRoadMap(true)
            setNewCard(true)
            setAboutBank(false)
        } else if (item === "Конвертер") {
            setRoadMap(false)
            setNewCard(true)
            setAboutBank(false)
        } else if (item === "Продукты") {
            setRoadMap(false)
            setNewCard(true)
            setAboutBank(false)
        } else if (item === "Отзывы") {
            setRoadMap(false)
            setNewCard(true)
            setAboutBank(false)
        } else if (item === "О банке") {
            setRoadMap(false)
            setNewCard(false)
            setAboutBank(true)
        }
        setActive(item);
    
        // Генерация случайного числа при нажатии на кнопку
        const randomChance = Math.random(); // Генерация числа от 0 до 1
        if (randomChance <= 0.47) {
            setAdv(true); // Показываем рекламу
        } else {
            setAdv(false); // Не показываем рекламу
        }
    };
    

      const Home = () => (
        <div>
            <Debit />
        </div>
        
      );
      
      const About = () => (
        <div>
            <Buisness />
        </div>
      );
      
      const Contact = () => (
        <div>
            <Buisness />
        </div>
      );

    return (
        <>
            {!isModalClosed && <Advertisement onClose={handleCloseModal} />}

            {isModalClosed && register && (
                <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                    <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-8 text-center">
                        <div className="flex justify-center items-center mb-6 flex-col">
                            <p
                                className={`${textColor} font-semibold transition-all hover:scale-105`}
                                onClick={name === "Имя неопределенно" ? handleNameClick : undefined}
                            >
                                {name},
                            </p>
                            <p className="text-lg text-gray-600 font-medium" style={{ fontFamily: "Rubik, sans-serif" }}>
                                У Вас уже есть аккаунт в <span className="font-semibold text-indigo-500">НеоБанк-Онлайн</span>
                            </p>
                        </div>

                        <button
                            className="font-medium text-lg bg-gradient-to-r from-indigo-400 to-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
                            style={{ fontFamily: "Rubik, sans-serif" }}
                            onClick={mainStartClient}
                        >
                            Сменить аккаунт <br /> или создать новый
                        </button>
                    </div>
                </div>
            )}

            {isModalClosed && (
                    startClient && 
                        <>
                            <header className={`w-full flex justify-center items-center ${aboutBank ? 'bg-[#bdbdbd87]' : ''}`}>
                                <div className="flex justify-between w-[910px] items-center">
                                    <a href="/login"><img className="h-[155px]" src="Logo_neon.svg"/></a>
                                        <ul className={`flex gap-[10px] ${aboutBank ? 'text-white' : ''}`} style={{ fontFamily: "Rubik, sans-serif" }}>
                                            {["Главная", "РОАДМАПА", "Конвертер", "Продукты", "О банке", "Отзывы"].map((item) => (
                                                <li key={item}>
                                                <button
                                                    className={clsx(
                                                    "transition-colors px-2 py-1",
                                                    active === item ? "text-black font-semibold" : aboutBank ? "text-[#414141]" : "text-[#8d8d8d]"
                                                    )}
                                                    onClick={() => handleClick(item)}
                                                >
                                                    {item}
                                                </button>
                                                </li>
                                            ))}
                                        </ul>

                                </div>
                                
                            </header>
                            {newCard && (
                                <>
                                    <div className="w-full flex justify-center">
                                        <div className="flex justify-between w-[910px] items-center">
                                            <div className="text-start w-[322px] flex flex-col" style={{ fontFamily: "Rubik, sans-serif" }}>
                                                <p className="text-[#272320] text-[28px]">Новая Дебетовая карта</p>
                                                <p className="text-[#7E47BD] font-bold text-[40px] mt-[-15px]">NeoBank</p>
                                                <p className="text-[#5d5a58]">Для тех, кто готов рисковать на каждом шагу. Ваши финансы никогда не будут в безопасности!</p>
                                                <div className="w-full flex justify-center mt-[10px]">
                                                    <button className="bg-[#ef3124] text-white rounded-[5px] w-[210px] h-[50px]" style={{ fontFamily: "Rubik, sans-serif" }}>Заказать карту</button>
                                                </div>
                                                
                                            </div>
                                        <div>
                                                <img className="skew-x-[-7deg] h-[550px]" src="/card.png"/>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="w-full flex justify-center mt-[-100px]">
                                        <div className="flex w-[850px] justify-end">
                                            <ul>
                                                <li className="border-b-2 border-[#999999] h-[50px] text-[#161616e0]" style={{ fontFamily: "Rubik, sans-serif" }}><span className="font-bold">Кэшбэк до 100%</span><br/><span className="relative -top-2 text-[#434347e0]">в категориях на выбор</span></li>
                                                <li className="border-b-2 border-[#999999] h-[50px] text-[#161616e0]" style={{ fontFamily: "Rubik, sans-serif" }}><span className="font-bold">Без комиссии</span> <br/> <span className="relative -top-2 text-[#434347e0]">платежи и наличные</span></li>
                                            </ul>
                                        </div>
                                    </div> 
                                </>
                            )}
                            {aboutBank && (
                                <AboutBank />
                            )}
                            
                            
                            {roadMap && (
                                    <div className="flex justify-center">
                                    <img src="/Comming_RoadMapa.svg"/>
                                </div>
                            )}
                            {adv && <Advertisement_pages/>}
                            
                            {newCard && (
                                <div className="w-full flex items-center flex-col h-[800px] justify-center bg-[#cdcdcd]">
                                    <div className="flex w-[910px] justify-between gap-[30px]">
                                        <p className="font-bold text-[#030306e0] text-[35px]" style={{ fontFamily: "Rubik, sans-serif" }}>Выбирайте лучшее</p>
                                        <div className="flex flex-col items-center justify-center">
                                            {/* Навигационная панель */}
                                            <div className="relative flex w-[470px] h-[55px] bg-gray-300 p-1 rounded-full">
                                                {/* Анимированное выделение */}
                                                <div
                                                className={clsx(
                                                    "absolute top-0 left-0 h-full w-1/3 bg-black rounded-full transition-all duration-300",
                                                    page === PageType.About && "translate-x-full",
                                                    page === PageType.Contact && "translate-x-[200%]"
                                                )}
                                                />
                                                
                                                {/* Кнопки */}
                                                <button
                                                className={clsx(
                                                    "relative z-10 flex-1 py-2 text-center font-semibold transition",
                                                    page === PageType.Home ? "text-white" : "text-black"
                                                )}
                                                onClick={() => setPage(PageType.Home)}
                                                >
                                                Для нас
                                                </button>
                                                <button
                                                className={clsx(
                                                    "relative z-10 flex-1 py-2 text-center font-semibold transition",
                                                    page === PageType.About ? "text-white" : "text-black"
                                                )}
                                                onClick={() => setPage(PageType.About)}
                                                >
                                                Малому бизнесу
                                                </button>
                                                <button
                                                className={clsx(
                                                    "relative z-10 flex-1 py-2 text-center font-semibold transition",
                                                    page === PageType.Contact ? "text-white" : "text-black"
                                                )}
                                                onClick={() => setPage(PageType.Contact)}
                                                >
                                                Крупному бизнесу
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                            {page === PageType.Home && <Home />}
                                            {page === PageType.About && <About />}
                                            {page === PageType.Contact && <Contact />}
                                    </div>
                                </div>
                            )}

                        </>
                    
            )}
            <style>{`
                :root {
                    --FLLICOLORGLA: #000000;
                }
            `}</style>
        </>
    );
};

export default Startclient;
