import Home from './pages/home/Home';
import './styles/index.scss';
import { ThemeProvider } from '@mui/material/styles';
import themes from './mui/themes'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/404/404';
import useLoadFonts from './hooks/useLoadFonts';
import LoadingComponent from './components/LoadingComponent/LoadingComponent';
import { frontendRoutes } from './api/frontendRoutes';
// import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import SignUp from './pages/signup/signup';

function App() {
  const { windowLoaded, fontsLoaded } = useLoadFonts()

  if (!windowLoaded || !fontsLoaded) return <div style={{ width: "100vw", height: "100vh" }}><LoadingComponent /></div>;
  return (
    <BrowserRouter>
      <ThemeProvider theme={themes}>
        <Routes>
          <Route path={frontendRoutes.home} element={<Home />} />
          <Route path={frontendRoutes.login} element={<Dashboard />} />
          <Route path={frontendRoutes.signup} element={<SignUp />} />
          <Route path={frontendRoutes.dashboard} element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
