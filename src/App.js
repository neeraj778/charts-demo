import './App.css';
import Linechart  from './Charts/line-chart.js';
import BarChart from './Charts/bar-chart.jsx';
import Composedchart from './Charts/composed-chart.jsx';
import Piechart from './Charts/pie-chart.jsx';
import Verticalchart from './Charts/radar-chart.jsx';
import Areachart from './Charts/area-chart.jsx'


function App() {
  return (
    <div className="App">
    <header className="App-header">Welcome to the demo for charts</header>
    <div className='align'>
    <div className="Line-charts"><Linechart  /></div>
    <div className="Bar-charts"><BarChart  /></div>
    <div className='Composed-chart'><Composedchart /></div>
    </div>
    <div className='align'>
   <div className='Pie-Charts'><Piechart /></div>
   <div className='Radar-Charts'><Verticalchart/></div>
   <div className='Area-Charts'><Areachart/></div>
    </div>

    </div>
  );
}

export default App;
