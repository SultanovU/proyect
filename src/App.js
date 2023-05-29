import { useState } from "react";
import './index.css'
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import AddCourse from "./scenes/addcourse";
import Invoices from "./scenes/invoices";
import FAQ from "./scenes/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Message from "./scenes/message/message";
import Chat from "./scenes/chat/Chat";
import Contacts from "./scenes/contacts";
import Addgroup from "./scenes/addgroup/addgroup";
import Payment from "./scenes/payment";
import MonthlyType from "./scenes/monthType";
import Score from "./scenes/score";
import HighStudent from "./scenes/highStudent";
import LowStudent from "./scenes/student";
import Payme from "./scenes/payme";
import Scaner from "./scenes/scaner/scaner";
import Qrcode from "./scenes/qrcode/Qrcode";
import Saveview from "./scenes/viewSave";
import Cards from "./scenes/cards/cards";
import Editcard from "./scenes/editcard/Editcard";
import Tushumlar from "./scenes/tushum";
import Chiqim from "./scenes/chiqim";
import SecondToogle from "./scenes/secondToggle/secondToggle";
// import Chat2 from "./scenes/chat2";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/message" element={<Message />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/team" element={<AddCourse />} />
              <Route path="/addgroup" element={<Addgroup />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/payment/payme" element={<Payme />} />
              <Route path="/monthlyType" element={<MonthlyType />} />
              <Route path="/payme/scaner" element={<Scaner />} />
              <Route path="/payme/qrcode" element={<Qrcode />} />
              <Route path="/payme/viewSave" element={<Saveview />} />
              <Route path="/payme/cards" element={<Cards />} />
              <Route path="/payme/editcard" element={<Editcard />} />
              <Route path="/chat/slidebar" element={<Editcard />} />
              <Route path="/score" element={<Score />} />
              <Route path="/student" element={<LowStudent />} />
              <Route path="/highStudent" element={<HighStudent />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/viewSave/tushum" element={<Tushumlar />} />
              <Route path="/viewSave/chiqim" element={<Chiqim />} />
              <Route path="/secondToogle" element={<SecondToogle />} />
              {/* <Route path="/chat2" element={<Chat2/>}/> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
