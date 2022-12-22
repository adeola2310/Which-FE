import { FC } from 'react';
import './Button.scss';

export interface ButtonProps {
  value: number;
  selectedNumber: number;
  onClick: () => void
}

const Button: FC<ButtonProps> = ({ value, selectedNumber, onClick }: ButtonProps) => {

  return (
    <button type='button' className={value % selectedNumber === 0 ? 'btn-active' : 'btn'} data-testid="btn-list" onClick={onClick}>{value}</button>
  );
}

export default Button;
