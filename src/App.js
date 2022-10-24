import "./assets/scss/index.scss";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import "primeflex/primeflex.scss";
import "./utils/i18n";

function App() {
  return (
    <div className="page-root">
      <div className="page-content">
        <BrowserRouter basename="/Narayanpura_Shiva_Temple">
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
