import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AlertComponent = ({ isClicked, login, password }) => {
    const navigate = useNavigate()
  useEffect(() => {
    if (isClicked) {
        localStorage.setItem("login", login);
        localStorage.setItem("password", password);
        navigate('/profile')
    }
  });
};

export default AlertComponent;
