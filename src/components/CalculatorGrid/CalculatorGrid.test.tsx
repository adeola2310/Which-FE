import { render, screen, waitFor } from '@testing-library/react';
import CalculatorGrid from './CalculatorGrid';

describe('<CalculatorGrid/>', () => {
  it('should render the 144 list of buttons', async() => {
    render(<CalculatorGrid/>)
    await waitFor(() => expect(screen.getAllByTestId('btn-list')).toHaveLength(144));
  });
 
});
