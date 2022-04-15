import './App.css';
import { Routes, Route, Navigate, BrowserRouter, Outlet } from "react-router-dom";
import HomePage from './pages/home';
import NewsPage from './pages/news';
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';
import LatestNewsPage from './pages/latestNews';
import SubmitPage from './pages/submit';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' >
            <Route index element={<HomePage />} />
            
          </Route>
          <Route path='/news' >
            <Route index element={<LatestNewsPage />} />
          </Route>
          <Route path='/news/:_id' >
            <Route index element={<NewsPage />} />
          </Route>
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/submit' >
            <Route index element={<SubmitPage />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
