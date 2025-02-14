import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SecretCode from '../../components-module/SecretCode';

const Main = () => {
  const [showSecretCode, setShowSecretCode] = useState(false);
  const [showPage, setPage] = useState(false)
  const navigate = useNavigate();

  useEffect(() => {
    const LoginBD = localStorage.getItem("login");
    const PassworBD = localStorage.getItem("password");
    const SecretCodeInStorage = localStorage.getItem('SecretCode');

    if (!LoginBD || !PassworBD) {
      navigate("/login");
    } else {
      // Проверка наличия SecretCode в localStorage
      if (!SecretCodeInStorage) {
        setShowSecretCode(true);  // Если кода нет, показываем компонент
        setPage(false)
      } else {
        setShowSecretCode(false); // Если код есть, не показываем компонент
        setPage(true)
      }
    }
  }, [navigate]);

  return (
    <>
      <div>
        {showSecretCode && <SecretCode />}
      </div>
      {showPage && (
        <h1>ПРИВЕТ</h1>
      )}
    </>
  );
};

export default Main;
