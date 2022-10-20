import { render, screen } from '@testing-library/react';
import App from './App';
import { configure ,EnzymeAdapter} from 'enzyme';

configure({ adapter: new EnzymeAdapter() });
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});



