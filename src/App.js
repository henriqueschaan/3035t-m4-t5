import { ThemeProvider } from './contexts/ThemeContext';
import { MainContent } from './components/MainContent';
import './css/App.css';

function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
