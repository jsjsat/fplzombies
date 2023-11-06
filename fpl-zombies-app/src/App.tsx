import './App.css';
import { Routes, Route } from 'react-router-dom';

import { ZombiesPage } from './components/page/ZombiesPage';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <h1>TOP FPL Zombies</h1>
      <h3> A list of top FPL players that have not made a single change! </h3>

      <Routes>
        <Route path="/" element={<ZombiesPage />} />
      </Routes>
    </ThemeProvider>
  );
}
