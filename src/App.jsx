import './App.css';
import { Routes, Route, Navigate, BrowserRouter, Outlet } from "react-router-dom";
import HomePage from './pages/home';
import NewsPage from './pages/news';
import LoginPage from './pages/auth/login';
import RegisterPage from './pages/auth/register';
import LatestNewsPage from './pages/latestNews';
import SubmitPage from './pages/submit';
import DashboardPage from './pages/dashboard';
import ClubNewsPage from './pages/clubNews';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' >
            <Route index element={<HomePage />} />
            
          </Route>
          <Route path='/news' >
            <Route path="club/:_id" element={<ClubNewsPage/>} />
            <Route index element={<LatestNewsPage />} />
          </Route>
          <Route path='/news/:_id' >
            <Route index element={<NewsPage />} />
          </Route>
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/submit/:_id' >
            <Route index element={<SubmitPage />} />
          </Route>
          <Route path='/dashboard/:_id' >
            <Route index element={<DashboardPage />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
