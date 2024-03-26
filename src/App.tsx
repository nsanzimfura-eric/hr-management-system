import Home from './pages/home/Home';
import './styles/index.scss';
import { ThemeProvider } from '@mui/material/styles';
import themes from './mui/themes'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/404/404';
import useLoadFonts from './hooks/useLoadFonts';
import LoadingComponent from './ui/LoadingComponent/LoadingComponent copy';

function App() {
  const { windowLoaded, fontsLoaded } = useLoadFonts()

  if (!windowLoaded || !fontsLoaded) return <div style={{ width: "100vw", height: "100vh" }}><LoadingComponent /></div>;
  return (
    <BrowserRouter>
      <ThemeProvider theme={themes}>
      <div className="appPage">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
