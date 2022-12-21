import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('<CalculatorGrid/>', () => {
  it('should render the list of buttons', () => {
    const buttonSpy = jest.fn();
    render(<Button value={10} onClick={buttonSpy}/>);
    const numberButton = screen.getByRole('button', { name: '10' });
    expect(numberButton).toBeInTheDocument()
  })
});
