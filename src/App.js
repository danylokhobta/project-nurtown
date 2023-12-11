import './App.sass';
import Navbar from './components/Navbar.js';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
