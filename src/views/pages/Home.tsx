import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderHome from "../../components-module/HeaderHome";
import Start from "../../content/Start_display";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const NameBD = localStorage.getItem("Name");
  

  // ХУКИ:
  const [money, setMoney] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(true);
  const [arrowCard, setArrowCard] = useState<boolean>(false)
  const [arrowSaving, setArrowSaving] = useState<boolean>(false)
  const [arrowForYou, setArrowForYou] = useState<boolean>(false)
  const [start, setStart] = useState<boolean>(true)
  const [activeBlock, setActiveBlock] = useState<string | null>(null); // Строка или null
  const [hoveredBlock, setHoveredBlock] = useState<string | null>(null); // Строка или null
  

  const CardBD = localStorage.getItem('cardProduct');
  const SavingBD = localStorage.getItem('SavingProduct');

  const generateRandomString = (length = 10) => {
    return Math.random().toString(36).substring(2, length + 2);
  };

  const handleRedirect = () => {
      const randomPath = generateRandomString();
      const storedText = localStorage.getItem("text") || "";
      const storedName = localStorage.getItem("Phone") || "";

      localStorage.setItem(`transfer_${randomPath}`, storedText);
      localStorage.setItem(`transfer_name_${randomPath}`, storedName);

      window.location.href = `/transfer/${randomPath}/${encodeURIComponent(storedName)}`;
  };
  

  const toggleBlock = (blockName: string) => {
    setActiveBlock(prevState => prevState === blockName ? null : blockName); // https://chatgpt.com/share/67dd9721-c45c-8004-af24-73c33a798b9a
  };

  useEffect(() => {
    const moneyBD = localStorage.getItem("money");
    if (moneyBD) {
      setMoney(moneyBD);
    }
    setTimeout(() => {
      setStart(false)
    }, 2000);
    
  }, []);

  const handleImageClick = () => {
    setVisible(!visible);
  };



  const formatNumberWithSpaces = (num: string) => {
    if (!num) return "0";
    const parsedNum = parseFloat(num);
    if (isNaN(parsedNum)) return "0"; // Если не число, возвращаем "0"
    return parsedNum.toLocaleString("ru-RU");
  };
  
  const formattedMoney = isNaN(parseFloat(money)) ? "0.00" : parseFloat(money).toFixed(2);
  const [whole, decimal] = formattedMoney.split(".");
  const wholeWithSpaces = formatNumberWithSpaces(whole);

  
  

  return (
    <>
      {start ? (
        <Start />) : (
        <div className="w-full flex justify-center ">
          <div className="w-[1500px] justify-between flex">
            <div className="w-[500px] bg-[#F1F2F4] flex h-screen flex-col items-center sticky top-0">
              <div>
                <img
                  src="/LOGO (1).svg"
                  className="drop-shadow-[0_0_10px_#aaaae8] h-[110px]"
                />
              </div>
              <div
                className="w-[400px] font-[600] text-[#030306e0] text-[23px] h-[75px] flex items-end"
                style={{ fontFamily: "OpenSans, sans-serif" }}
              >
                Мои продукты
              </div>
              <div className="flex flex-col w-[400px]">
                <section className="flex justify-between w-full">
                  {visible ? (
                    <>
                      <div className="flex h-[75px] justify-end flex-col">
                        <div className="flex items-center gap-[20px]">
                          <h3 className="font-[500] text-[22px]">
                            <span className="text-[black]">{wholeWithSpaces}</span>
                            <span className="text-[#4b4b56e0]">,{decimal}</span>
                            <span className="text-[#57575ee0]"> ₽</span>
                          </h3>
                          <img
                            src="/invisible.png"
                            alt="Visible Image"
                            className="h-[25px]"
                            onClick={handleImageClick}
                          />
                        </div>
                        <div className="text-[#9d9797] text-[15px]" style={{fontFamily: "Rubik, sans-serif"}}>Общий баланс</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex h-[75px] justify-end flex-col">
                        <div className="flex items-center gap-[20px]">
                          <div
                            className="w-[100px] h-[30px] rounded-[5px]"
                            style={{ backgroundColor: "#cecece", color: "white" }}
                          ></div>
                          <img
                            src="/visible.png"
                            alt="Error Image"
                            className="h-[25px]"
                            onClick={handleImageClick}
                          />
                        </div>
                        <div className="text-[#9d9797] text-[15px]" style={{fontFamily: "Rubik, sans-serif"}}>Общий баланс</div>
                      </div>
                    </>
                  )}
                  <div className="flex items-end h-[65px]">
                    <img className="h-[25px] filter drop-shadow-md" src="/arrow.png" />
                  </div>
                </section>
              </div>
              <div 
                className="w-[400px] flex h-[70px] items-end justify-between cursor-pointer" 
                onClick={() => setArrowCard(prevState => !prevState)}
              >
                <h3 className="font-[500] text-[#030306e0] text-[20px]" style={{fontFamily: "Rubik, sans-serif"}}>Карты</h3>
                <div className="flex items-end h-[65px]">
                  <img
                    className={`h-[25px] filter drop-shadow-md transform ${arrowCard ? 'rotate-90' : 'rotate-0'}`}
                    src="/arrow.png"
                  />
                </div>
              </div>
              <section>
                {arrowCard && (
                  <div>
                    {CardBD ? (
                      <div className="w-[450px] flex flex-col">
                        <div className="h-[15px]"></div>
                        <div className="w-full h-[75px] bg-[#ffffff] rounded-[10px] flex justify-between items-center">
                          <div className="flex flex-col w-[345px] pl-[20px]" style={{ fontFamily: 'Rubik, sans-serif' }}>
                            <p className="text-[#9d9797] text-[15px]">Текущий счет</p>
                            <div className="flex font-[500]" style={{ fontFamily: 'Rubik, sans-serif' }}>
                              <span className="text-[black]">{wholeWithSpaces}</span>
                              <span className="text-[#4b4b56e0]">,{decimal}</span>
                              <span className="text-[#57575ee0]"> ₽</span>
                            </div>
                          </div>
                          <div>
                            <img src="/card_home.png" alt="Card" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="w-[450px] flex flex-col">
                        <div className="h-[15px]"></div>
                        <div className="w-full flex justify-center" style={{ fontFamily: 'Rubik, sans-serif' }}>У вас нет еще активной карты</div>
                        <div className="h-[10px]"></div>
                        <div className="w-full h-[60px] bg-[#000000] rounded-[10px] flex justify-center items-center text-[#ffffff]" style={{ fontFamily: 'Rubik, sans-serif' }}>
                          Новый продукт
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </section>
              <div className="w-[400px] flex h-[70px] items-end justify-between cursor-pointer" onClick={() => setArrowSaving(prevState => !prevState)}>
                <h3 className="font-[500] text-[#030306e0] text-[20px]" style={{fontFamily: "Rubik, sans-serif"}}>Накопления</h3>
                <div className="flex items-end h-[65px]">
                <img
                  className={`h-[25px] filter drop-shadow-md transform ${arrowSaving ? 'rotate-90' : 'rotate-0'}`}
                  src="/arrow.png"
                />
                </div>
              </div>
              <section>
                {arrowSaving && (
                  <div>
                    {SavingBD ? (
                      <div>
                        
                      </div>
                    ): (
                      <div>
                        <div className="w-[450px] flex flex-col">
                          <div className="h-[15px]"></div>
                          <div className="w-full flex justify-center" style={{ fontFamily: 'Rubik, sans-serif' }}>У вас нет еще накоплений</div>
                          <div className="h-[10px]"></div>
                          <div className="w-full h-[60px] bg-[#000000] rounded-[10px] flex justify-center items-center text-[#ffffff]" style={{ fontFamily: 'Rubik, sans-serif' }}>
                            Новый продукт
                          </div>
                        </div>
                      </div>
                    )}
                    </div>
                )}
              </section>
              <div className="h-[55px]"></div>
              <div className="w-[400px] h-[60px] bg-[#000000] rounded-[10px] flex justify-center items-center text-[#ffffff]" style={{ fontFamily: 'Rubik, sans-serif' }}>
                Новый продукт
              </div>
            </div>
            <div className="w-[900px] flex flex-col">
              <HeaderHome />
              <div className="h-[150px] flex items-end">
                <p className="font-[550] text-[40px] text-[#030306c7]" style={{fontFamily: "Rubik, sans-serif"}}>
                  Добрый день, {NameBD}
                </p>
              </div>
              <div className="h-[100px] flex items-end">
                <div
                  className="flex w-[140px] justify-between cursor-pointer"
                  onClick={() => {
                    toggleBlock('forYou')}
                  }
                  onMouseEnter={() => setHoveredBlock("forYou")}
                  onMouseLeave={() => setHoveredBlock(null)}
                >
                  <p
                    style={{
                      color: hoveredBlock === 'forYou' ? 'var(--primary-color)' : 'var(--secondary-color)', fontFamily: "Rubik, sans-serif"
                    }}
                    className="font-[500] text-[26px] transition-colors duration-150"
                  >
                    Для вас
                  </p>
                  <div className="flex h-[35px] items-end">
                    <img
                      src={hoveredBlock === "forYou" ? "/arrow-ser.png" : '/arrow-black.png'}
                      className={`h-[30px] transition-opacity duration-300 mb-[0px] ${activeBlock === "forYou" ? "rotate-90" : ""}`}
                    />
                  </div>
                </div>
              </div>
              {activeBlock === 'forYou' && (
                <div>Привет</div>
              )}

              <div className="h-[100px] flex items-center">
                <div
                  className="flex w-[315px] justify-between cursor-pointer"
                  onClick={() => {
                    toggleBlock('payments');
                    
                  }}                  
                  onMouseEnter={() => setHoveredBlock("payments")}
                  onMouseLeave={() => setHoveredBlock(null)}
                >
                  <p
                    style={{
                      color: hoveredBlock === 'payments' ? 'var(--primary-color)' : 'var(--secondary-color)', fontFamily: "Rubik, sans-serif"
                    }}
                    className="font-[500] text-[26px] transition-colors duration-150"
                  >
                    Переводы и платежи
                  </p>
                  <div className="flex h-[35px] items-end">
                    <img
                      src={hoveredBlock === "payments" ? "/arrow-ser.png" : '/arrow-black.png'}
                      className={`h-[30px] transition-opacity duration-300 ${activeBlock === "payments" ? "rotate-90" : ""}`}
                    />
                    </div>
                </div>
              </div>
              {activeBlock === 'payments' && (
                <div>Дополнительная информация о платежах</div>
              )}
              <div className="h-[70px] flex items-center justify-between w-full">
                <div
                  className="flex w-[350px] justify-between cursor-pointer"
                >
                  <p
                    style={{
                      color: 'var(--secondary-color)', fontFamily: "Rubik, sans-serif"
                    }}
                    className="font-[500] text-[23px] transition-colors duration-150"
                  >
                    Шаблоны и автоплатежы
                  </p>
                </div>
                <div className="flex gap-[25px] items-center">
                  <button className="bg-[#1212131a] rounded-[5px] w-[135px] h-[35px] text-[14px]">Создать новый</button>
                  <div className="flex gap-[10px]">
                    <button className="rounded-full w-[25px] h-[25px] bg-[#efefef] flex items-center justify-center">
                      <svg
                        role="img"
                        focusable="false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#ABABB3B3"
                      >
                        <path d="M10 12l5.5 5.5L14 19l-7-7 7-7 1.5 1.5L10 12z"></path>
                      </svg>
                    </button>
                    <button className="rounded-full w-[25px] h-[25px] bg-[#efefef] flex items-center justify-center">
                      <svg
                        role="img"
                        focusable="false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        style={{ transform: "rotate(180deg)" }}
                        fill="#ABABB3B3"
                      >
                        <path d="M10 12l5.5 5.5L14 19l-7-7 7-7 1.5 1.5L10 12z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="h-[200px] flex justify-center w-full flex-col gap-[25px]">
                <div className="flex w-full justify-between">
                  <div
                    className="flex w-[350px] justify-between cursor-pointer"
                  >
                    <p
                      style={{
                        color: 'var(--secondary-color)', fontFamily: "Rubik, sans-serif"
                      }}
                      className="font-[500] text-[23px] transition-colors duration-150"
                    >
                      По телефону
                    </p>
                  </div>
                  <div className="flex gap-[25px] items-center">
                    <div className="flex gap-[10px]">
                      <button className="rounded-full w-[25px] h-[25px] bg-[#efefef] flex items-center justify-center">
                        <svg
                          role="img"
                          focusable="false"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="#ABABB3B3"
                        >
                          <path d="M10 12l5.5 5.5L14 19l-7-7 7-7 1.5 1.5L10 12z"></path>
                        </svg>
                      </button>
                      <button className="rounded-full w-[25px] h-[25px] bg-[#efefef] flex items-center justify-center">
                        <svg
                          role="img"
                          focusable="false"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          style={{ transform: "rotate(180deg)" }}
                          fill="#ABABB3B3"
                        >
                          <path d="M10 12l5.5 5.5L14 19l-7-7 7-7 1.5 1.5L10 12z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[50px] w-[270px] justify-center">
                  <div className="flex flex-col items-center gap-[10px]">
                    <button className="bg-[#ededed] w-[80px] h-[80px] rounded-full flex items-center justify-center cursor-pointer" onClick={handleRedirect}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="none"></rect>
                        <path d="M3 5.78476L5.69 10.5477V13.4513L3.00433 18.2046L3 5.78476Z" fill="#575EAA"></path>
                        <path d="M13.3253 8.81405L15.8444 7.28408L21 7.28032L13.3253 11.9396V8.81405Z" fill="#DC195B"></path>
                        <path d="M13.3112 5.75734L13.3253 12.0616L10.6299 10.4214V0.995995L13.3112 5.75734Z" fill="#FCB52E"></path>
                        <path d="M21 7.28033L15.8444 7.28409L13.3112 5.75734L10.6299 0.995995L21 7.28033Z" fill="#F47733"></path>
                        <path d="M13.3253 18.2314V15.172L10.6304 13.5625V22.996L13.3253 18.2314Z" fill="#60BB46"></path>
                        <path d="M15.8384 16.7149L5.69 10.5477L3 5.78476L20.9897 16.709L15.8384 16.7149Z" fill="#108ACB"></path>
                        <path d="M10.6304 22.996L13.3253 18.2314L15.8385 16.7149L20.9898 16.709L10.6304 22.996Z" fill="#118442"></path>
                        <path d="M3.00427 18.2046L10.6509 13.5625L8.07985 11.9998L5.68994 13.4513L3.00427 18.2046Z" fill="#9150A0"></path>
                      </svg>
                    </button>
                    <p className="text-[14px] text-[#636262]" style={{fontFamily: "Rubik, sans-serif"}}>Сделать перевод</p>
                  </div>
                  <div className="flex flex-col items-center gap-[10px]">
                    <button className="bg-[#ededed] w-[80px] h-[80px] rounded-full flex items-center justify-center cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" fill="none"></rect>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2 8.11092C15.2 6.02561 14.4 3.90039 12 3.90039C9.59999 3.90039 8.8 5.98668 8.8 8.11092C8.8 10.2351 10.218 11.9004 12 11.9004C13.782 11.9004 15.2 10.1962 15.2 8.11092ZM20 16.6384C20 15.6663 19.538 14.7583 18.6239 14.4276C17.4144 13.9901 15.3193 13.5004 12 13.5004C8.68073 13.5004 6.58563 13.9901 5.37609 14.4276C4.46196 14.7583 4 15.6663 4 16.6384V16.929C4.05244 17.7245 4.40181 18.1995 4.93691 18.7764C6.06277 19.9902 8.43707 21.5004 12 21.5004C15.9043 21.5004 18.1998 19.8949 19.2073 18.6905C19.649 18.1626 19.9542 17.6238 20 16.929V16.6384Z" fill="#aaaaaa"></path>
                      </svg>
                    </button>
                    <p className="text-[14px] text-[#636262]" style={{fontFamily: "Rubik, sans-serif"}}>Себе</p>
                  </div>
                </div>
              </div>
              <div className="h-[200px] flex jusitfy-center flex-col w-full">
                <div
                  className="flex w-full justify-between cursor-pointer"
                >
                  <p
                    style={{
                      color: 'var(--secondary-color)', fontFamily: "Rubik, sans-serif"
                    }}
                    className="font-[500] text-[23px] transition-colors duration-150"
                  >
                    Нео-Выгодно
                  </p>
                    <div className="flex gap-[25px] items-center">
                      <div className="flex gap-[10px]">
                        <button className="rounded-full w-[25px] h-[25px] bg-[#efefef] flex items-center justify-center">
                          <svg
                            role="img"
                            focusable="false"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="#ABABB3B3"
                          >
                            <path d="M10 12l5.5 5.5L14 19l-7-7 7-7 1.5 1.5L10 12z"></path>
                          </svg>
                        </button>
                        <button className="rounded-full w-[25px] h-[25px] bg-[#efefef] flex items-center justify-center">
                          <svg
                            role="img"
                            focusable="false"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            style={{ transform: "rotate(180deg)" }}
                            fill="#ABABB3B3"
                          >
                            <path d="M10 12l5.5 5.5L14 19l-7-7 7-7 1.5 1.5L10 12z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                </div>
                <div className="flex gap-[25px] h-[165px] items-center">
                  <div className="w-[250px] h-[105px] bg-[#CED9F9] rounded-[8px] flex flex-col justify-between pl-[17px] py-[10px]">
                    <p className="font-[500] text-[16px]" style={{fontFamily: "Rubik, sans-serif"}}>Суперкэшбэк до 100%</p>
                    <p className="text-[15px]">Заработать <br/>на покупках</p>
                  </div>
                  <div className="w-[250px] h-[105px] bg-[#B7F5C1] rounded-[8px] flex flex-col justify-between pl-[17px] py-[10px]">
                    <p className="font-[500] text-[16px]" style={{fontFamily: "Rubik, sans-serif"}}>Моя выгода</p>
                    <p className="text-[15px]" style={{fontFamily: "Rubik, sans-serif"}}>История <br/>и прогноз</p>
                  </div>
                </div>
              </div>
              <div className="h-[200px] flex jusitfy-center flex-col w-full">
                <div
                  className="flex w-full justify-between cursor-pointer"
                >
                  <p
                    style={{
                      color: 'var(--secondary-color)', fontFamily: "Rubik, sans-serif"
                    }}
                    className="font-[500] text-[23px] transition-colors duration-150"
                  >
                    Инвестиции
                  </p>
                  <div className="flex gap-[25px] items-center">
                    <div className="flex gap-[10px]">
                      <button className="rounded-full w-[25px] h-[25px] bg-[#efefef] flex items-center justify-center">
                        <svg
                          role="img"
                          focusable="false"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="#ABABB3B3"
                        >
                          <path d="M10 12l5.5 5.5L14 19l-7-7 7-7 1.5 1.5L10 12z"></path>
                        </svg>
                      </button>
                      <button className="rounded-full w-[25px] h-[25px] bg-[#efefef] flex items-center justify-center">
                        <svg
                          role="img"
                          focusable="false"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          style={{ transform: "rotate(180deg)" }}
                          fill="#ABABB3B3"
                        >
                          <path d="M10 12l5.5 5.5L14 19l-7-7 7-7 1.5 1.5L10 12z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-[25px] h-[165px] items-center">
                  <div className="w-[250px] h-[105px] bg-[#E0EBC3] rounded-[8px] flex flex-col justify-between items-center py-[25px]">
                    <p className="font-[500] text-[16px]" style={{fontFamily: "Rubik, sans-serif"}}>🛠️В разработке</p>
                    <p className="text-[16px]" style={{fontFamily: "Rubik, sans-serif"}}>Coming soon...🤫</p>
                  </div>
                </div>
              </div>
              <div className="h-[200px] flex justify-center flex-col">
                <div
                  className="flex w-[280px] justify-between cursor-pointer"
                  onClick={() => {
                    toggleBlock('transfer');
                    navigate('/history')
                  }}                  
                  onMouseEnter={() => setHoveredBlock("transfer")}
                  onMouseLeave={() => setHoveredBlock(null)}
                >
                  <p
                    style={{
                      color: hoveredBlock === 'transfer' ? 'var(--primary-color)' : 'var(--secondary-color)', fontFamily: "Rubik, sans-serif"
                    }}
                    className="font-[500] text-[26px] transition-colors duration-150"
                  >
                    История операций
                  </p>
                  <div className="flex h-[35px] items-end">
                    <img
                      src={hoveredBlock === "transfer" ? "/arrow-ser.png" : '/arrow-black.png'}
                      className={`h-[30px] transition-opacity duration-300`}
                    />
                    </div>
                </div>
                <div className="w-[270px] flex flex-col items-center h-[230px] justify-center gap-[15px]">
                  <div className="bg-[#F2F3F5] w-[80px] h-[80px] flex items-center justify-center rounded-[20px]">
                    <svg role="img" focusable="false" fill="currentColor" width="35" height="35" viewBox="0 0 24 24">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM11 7v5a3 3 0 001.2 2.4l2.6 1.7 1.2-1.6-2.6-1.7a1 1 0 01-.4-.8V7h-2z" fill-rule="evenodd" clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <p style={{fontFamily: "Rubik, sans-serif"}} className="font-[500] text-[18px]">Нет подходящих операций</p>
                </div>
              </div>
            </div>
          </div>
        </div>)}
        <style>
          {`
            :root {
              --primary-color: #3f3f4cb3;
              --secondary-color: #030306c7;
              --accent-color: #57575ee0;
            }

          `}
        </style>
    </>
  );
};

export default Home;
