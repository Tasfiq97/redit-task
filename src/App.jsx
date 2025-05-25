import './App.css';
import MainLayout from './layout/MainLayout';
import Routers from './routes/Routers';

function App() {
  return (
    <div>
      <MainLayout>
        <Routers />
      </MainLayout>
    </div>
  );
}

export default App;
