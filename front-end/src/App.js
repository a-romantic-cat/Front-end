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
import Check2 from './components/MyLetterbox/Check2';
import Answer1 from './components/MyLetterbox/Answer1';
import Answer2 from './components/MyLetterbox/Answer2';
import Answer3 from './components/MyLetterbox/Answer3';
import Answer4 from './components/MyLetterbox/Answer4';
import OpenLetter1 from './components/MyLetterbox/OpenLetter1';
import CreateAccount from './components/Login/CreateAccount';
import Terms from './components/Login/Terms';
import MakeLetterbox from './components/Login/MakeLetterbox';
import WritingLetter  from './components/RomanticLetterbox/WritingLetter/WritingLetter';
import CompletedLetterWriting from './components/RomanticLetterbox/WritingLetter/CompletedLetterWriting';
import CompletedLetterReplying from './components/RomanticLetterbox/ReplyingLetter/CompletedLetterReplying';
import ReplyingLetterMain from './components/RomanticLetterbox/ReplyingLetter/ReplyingLetterMain';
import ReplyingLetter from './components/RomanticLetterbox/ReplyingLetter/ReplyingLetter';
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
          <Route path="/CreateAccount" element={<CreateAccount />} />
          <Route path="/MyLetterbox" element={<MyLetterbox />} />
          <Route path="/AddressBook" element={<AddressBook />} />
          <Route path="/RomanticLetterbox" element={<RomanticLetterbox />} />
          <Route path="/WritingLetter" element={<WritingLetter />} />
          <Route path="/CompletedLetterWriting" element={<CompletedLetterWriting />} />
          <Route path="/CompletedLetterReplying" element={<CompletedLetterReplying />} />
          <Route path="/ReplyingLetterMain" element={<ReplyingLetterMain />} />
          <Route path="/ReplyingLetter" element={<ReplyingLetter />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route path="/Check1" element={<Check1 />} />
          <Route path="/Check2" element={<Check2 />} />
          <Route path="/Answer1" element={<Answer1 />} />
          <Route path="/Answer2" element={<Answer2 />} />
          <Route path="/Answer3" element={<Answer3 />} />
          <Route path="/Answer4" element={<Answer4 />} />
          <Route path="/OpenLetter1" element={<OpenLetter1 />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/MakeLetterbox" element={<MakeLetterbox />} />
        </Routes>
      </BrowserRouter>
    </Background>
  );
}

export default App;