import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AlertComponent = ({ isClicked, login, password }) => {
    const navigate = useNavigate()
  useEffect(() => {
    if (isClicked) {
        localStorage.setItem("login", login);
        localStorage.setItem("password", password);
        navigate('/home')
        window.history.replaceState(null, "", "/home");
    }
  });
};

export default AlertComponent;
