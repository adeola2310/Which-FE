import { FC } from 'react';
import './Button.scss';

export interface ButtonProps {
  value: number;
  onClick: () => void
}

const Button: FC<ButtonProps> = ({ value, onClick }: ButtonProps) => {
  return (
    <button type='button' className='btn' data-testid="btn-list" onClick={onClick}>{value}</button>
  );
}

export default Button;
