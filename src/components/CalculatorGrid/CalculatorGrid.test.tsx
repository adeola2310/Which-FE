import { render, screen, waitFor } from '@testing-library/react';
import CalculatorGrid from './CalculatorGrid';

describe('<CalculatorGrid/>', () => {
  it('should render the 144 list of buttons', async() => {
    render(<CalculatorGrid/>)
    await waitFor(() => expect(screen.getAllByTestId('btn-list')).toHaveLength(144));
  })
//   it('should change the border color of a button that is clicked', async() => {
//     render(<CalculatorGrid/>)
//     await waitFor(() => expect(screen.getAllByTestId('btn-list')).toHaveLength(13));
//   })
});
