import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInSide from './signInSlide';
import Main from './main';
import Chat from './chat';


export default function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route path="/login" element={<SignInSide/>} />
          <Route path="/chat/:profilename" element={<Chat/>} />
        </Routes>
      </Router>
  );
}