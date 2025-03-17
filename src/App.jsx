import './App.css';
import Accordion from './components/Accordition';
import { accordionData } from './utils/content';

function App() {
  return (
    <div>
      <div className='accordion'>
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
}

export default App;
