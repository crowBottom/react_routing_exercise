import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Layout from "./pages/Layout"
import Vending from './pages/Vending';
import NoPage from "./pages/NoPage"
import IndigoCandy from './pages/IndigoCandy'
import RedCandy from './pages/RedCandy'
import BlueCandy from './pages/BlueCandy'
import GreenCandy from './pages/GreenCandy'
import YellowCandy from './pages/YellowCandy'

function App() {
  return (
    <div className="w3-margin">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<Vending />} />
            <Route path="*" element={<NoPage />} />
          </Route>
          <Route path="/vending/indigo_candy" element={<IndigoCandy />}></Route>
          <Route path="/vending/red_candy" element={<RedCandy />}></Route>
          <Route path="/vending/blue_candy" element={<BlueCandy />}></Route>
          <Route path="/vending/green_candy" element={<GreenCandy />}></Route>
          <Route path="/vending/yellow_candy" element={<YellowCandy />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
