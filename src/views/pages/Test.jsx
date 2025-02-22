import { useState, useEffect } from "react";

function Test() {
  const [NewPassword, setNewPassword] = useState("");
  const [passwords, setPasswords] = useState([]);

  // Загружаем данные из JSON файла
  useEffect(() => {
    const fetchPasswords = async () => {
      const response = await fetch("/passwords.json"); // Путь для файла в public
      const data = await response.json();
      setPasswords(data.passwords); // Устанавливаем пароли в state
    };
    fetchPasswords();
  }, []);

  // Функция для выбора случайного пароля из массива
  const generateRandomPassword = () => {
    if (passwords.length > 0) {
      const randomPassword = passwords[Math.floor(Math.random() * passwords.length)];
      setNewPassword(randomPassword); // Устанавливаем выбранный пароль в state
    }
  };

  return (
    <div>
      <input
        type="password"
        value={NewPassword}
        onChange={(e) => setNewPassword(e.target.value)} // для изменения пароля вручную
        placeholder="Введите пароль"
      />
      <button onClick={generateRandomPassword}>Подобрать пароль</button>
    </div>
  );
}

export default Test;
