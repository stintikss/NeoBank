import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SecretCode from '../../components-module/SecretCode';

const Main = () => {
  const [showSecretCode, setShowSecretCode] = useState(false);
  const [showPage, setShowPage] = useState(false);
  const [name, setName] = useState(""); 
  const navigate = useNavigate();

  useEffect(() => {
    const checkInactivity = () => {
      const lastVisit = localStorage.getItem("lastVisit");
      const now = Date.now();

      if (lastVisit && now - lastVisit > 300000) { // 30 минут
        navigate("/login", { replace: true });
      }
    };

    const interval = setInterval(checkInactivity, 1000);

    const updateActivity = () => {
      localStorage.setItem("lastVisit", Date.now());
    };

    document.addEventListener("mousemove", updateActivity);
    document.addEventListener("keydown", updateActivity);

    return () => {
      clearInterval(interval);
      document.removeEventListener("mousemove", updateActivity);
      document.removeEventListener("keydown", updateActivity);
    };
  }, [navigate]);

  useEffect(() => {

    const LoginBD = localStorage.getItem("login");
    const PassworBD = localStorage.getItem("password");
    const SecretCodeInStorage = localStorage.getItem('SecretCode');

    const CodeBD = localStorage.getItem('SecretCode');
    const NameBD = localStorage.getItem('Name');

    if (!LoginBD || !PassworBD) {
      navigate('/login');
    } else if (!CodeBD || !NameBD) {
      navigate("/profile");
    } else {
      setName(NameBD); 

      if (!SecretCodeInStorage) {
        setShowSecretCode(true);  
        setShowPage(false);
      } else {
        setShowSecretCode(false);
        setShowPage(true);
      }
    }
  }, [navigate]);

  return (
    <>
      <div>
        {showSecretCode && <SecretCode />}
      </div>
      {showPage && (
        <h1>ПРИВЕТ, {name}</h1> 
      )}
    </>
  );
};

export default Main;
