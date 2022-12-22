import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';


const onClick = jest.fn();

describe('<CalculatorGrid/>', () => {
  it('should render the list of buttons', () => {
    render(<Button value={10} onClick={onClick} selectedNumber={10} />);
    const numberButton = screen.getByRole('button', { name: '10' });
    expect(numberButton).toBeInTheDocument();
  });

  it('should toggle the number buttoon when it is clickednon', () => {
    render(<Button value={10} onClick={onClick} selectedNumber={10} />)
    const numberButton = screen.getByRole('button', { name: '10' });
    userEvent.click(numberButton);
    expect(onClick).toHaveBeenCalled();
  })
  it('should highlight the multiples of button of the selected number ', () => {
    render(<Button value={10} onClick={onClick} selectedNumber={2} />)
    const numberButton = screen.getByRole('button', { name: '10' });
    userEvent.click(numberButton);
    expect(numberButton).toHaveClass('btn-active');
  })
});
