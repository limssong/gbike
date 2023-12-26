import gcoo from './images/gcoo.svg';
import scroll from './images/scroll.svg';
import './App.scss';
import Menu from './pages/Menu';

function App() {
  return (
    <div className="App">
      <h1><img src={gcoo} alt="GCOO" /></h1>
      <Menu></Menu>
      <img src={scroll} className="img-scroll" alt="scroll" />
      <div class="container">
        <div className="title">
          A new model for open collaboration
        </div>
        <p className="desc">Run an organization where members get rewarded for their contributions with fractional ownership.</p>
        <button type="button" className="btn">Request early access</button>
        <footer>
          <span class="info">Gbike Product team</span>
          <span class="info-public">임송희 010-9984-9078</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
