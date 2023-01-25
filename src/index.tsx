import { render } from 'react-dom';
import Counter from './components/Counter';

render(
  <div>
    <div>this is react</div>
    <Counter />
  </div>,
  document.getElementById('root')
);
