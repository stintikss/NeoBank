import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SecretCode from '../../components-module/SecretCode';

const CodeName = () => {
    const [checkRegister, setCheckRegister] = useState(false)

    const LoginBD = localStorage.getItem("login");
    const PassworBD = localStorage.getItem("password");

    useEffect(() => {
        if (!LoginBD || !PassworBD) {
            setCheckRegister(true);
        }
    },);
    
    return(
        <>
            {checkRegister ? (
                <>
                    <p>Вы не зарегистрированны</p>
                </>
            ) : (
                <>
                    <SecretCode />
                </>
            )}
            
        </>
    )
}

export default CodeName