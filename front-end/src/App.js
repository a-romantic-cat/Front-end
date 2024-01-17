import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyLetterbox from "./pages/MyLetterbox";
import AddressBook from "./pages/AddressBook";
import RomanticLetterbox from "./pages/RomanticLetterbox";
import Store from "./pages/Store";
import MyPage from "./pages/MyPage";
import Check1 from './components/MyLetterbox/Check1';
import Answer1 from './components/MyLetterbox/Answer1';
import OpenLetter1 from './components/MyLetterbox/OpenLetter1';

const Background = styled.div`
  background-color: #FFFEF8;
  width: 1920px;
  height: 1080px;
`

function App() {
  return (
    <Background>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/MyLetterbox" element={<MyLetterbox />} />
          <Route path="/AddressBook" element={<AddressBook />} />
          <Route path="/RomanticLetterbox" element={<RomanticLetterbox />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/Check1" element={<Check1 />} />
          <Route path="/Answer1" element={<Answer1 />} />
          <Route path="/OpenLetter1" element={<OpenLetter1 />} />

        </Routes>
      </BrowserRouter>
    </Background>
  );
}

export default App;