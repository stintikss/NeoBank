import { BrowserRouter, useRoutes } from "react-router-dom";
import { appRoutes } from "./views/routes/appRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

// Отдельный компонент для обработки маршрутов
function AppRoutes() {
  return useRoutes(appRoutes);
}

export default App;
