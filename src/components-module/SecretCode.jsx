import { useState } from "react";

const SecretCode = () => {
    const [codeInput, setCodeInput] = useState(''); // состояние для ввода кода
    const [isSuccess, setIsSuccess] = useState(false); // состояние для проверки кода

    const ButtonCodeReq = () => {
        if(codeInput) {
            alert('Успех');
            setIsSuccess(true);
            localStorage.setItem('SecretCode', codeInput)
            window.location.reload()
        } else {
            alert('Не успех');
            setIsSuccess(false);
        }
    }

    return(
        <>
            <input 
                onChange={function(ef) { setCodeInput(ef.target.value); }}
                placeholder="Введите код" 
            />
            <button onClick={ButtonCodeReq}>Готово</button>
        </>
    );
}

export default SecretCode;
