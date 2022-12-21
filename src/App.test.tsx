import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
  it('should render the title of the App', () => {
    render(<App/>)
    screen.getByText("Let us learn multiplication!")
  })
});
