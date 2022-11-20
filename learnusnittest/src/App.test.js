import App from './App';
import { configure, EnzymeAdapter, shallow } from 'enzyme';

configure({ adapter: new EnzymeAdapter() });

describe('<App />', () => {
  const wrapper = shallow(<App />);
  it('render the App component', () => {
    console.log(wrapper);
  });
});
