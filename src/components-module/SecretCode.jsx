import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Profile from '../content/Profile'

const SecretCode = () => {
    const [codeInput, setCodeInput] = useState(''); 

    const [NameInput, setNameInput] = useState('')

    const [AllowCodeName, setNameCodeAllow] = useState(true)

    const navigate = useNavigate()

    const ButtonCodeReq = () => {
        if(codeInput) {
            localStorage.setItem('SecretCode', codeInput)
            window.location.reload()
        }
    }

    useEffect(() => {
        if(CodeBD) {
            setNameCodeAllow(false)
        }

        if(CodeBD && NameBD) {
            setNameCodeAllow('Register')
        }
        
    })

    const ButtonNameReq = () => {
        localStorage.setItem('Name', NameInput)
        navigate('/home')

    }

    const backPages = () => {
        navigate('/home')
    }

    const CodeBD = localStorage.getItem('SecretCode')
    const NameBD = localStorage.getItem('Name')


    return(
        <>
            {AllowCodeName === 'Register' ? (
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
            ) : AllowCodeName ? (
                <>
                    <header className="flex justify-center">
                        <img 
                            src="/LOGO (1).svg" 
                            alt="NeonBank"
                            className="drag-none select-none h-[100px]"
                        />
                    </header>
                    <div className="h-[1000px] justify-center flex flex-col gap-[40px]">
                       <div className="w-full flex justify-center">
                            <p className="font-[500] text-[30px]" style={{ fontFamily: 'Rubik, sans-serif' }}>Создать уникальный код</p>
                        </div>
                        <div className="w-full flex items-center flex-col">
                            <div className="w-[500px] flex flex-col gap-[25px]">
                            <input 
                                onChange={(ef) => setCodeInput(ef.target.value)}
                                className="bg-[#EAEAED] rounded-[10px] h-[60px] pl-[15px] focus:outline-none focus:ring-0 w-full"
                                placeholder="Введите новый код" 
                                />
                                <button onClick={ButtonCodeReq} className="bg-[#F3F5F6] w-full h-[55px] rounded-[10px]">Вперёд</button> 
                            </div>
                            
                        </div> 
                    </div>
                    
                    
                </>
            ) : (
                <>
                    <input 
                        onChange={(ef) => setNameInput(ef.target.value)}
                        placeholder="Введите имя" 
                    />
                    <button onClick={ButtonNameReq}>Готово</button>
                </>
            )}



        </>
    );
}

export default SecretCode;
