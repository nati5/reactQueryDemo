import { provide } from '@hilma/tools';
import './App.css';
import Routing from './Router';

import './style/main.scss';
function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default provide()(App);
