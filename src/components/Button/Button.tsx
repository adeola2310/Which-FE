import { FC } from 'react';
import './Button.scss';

export interface ButtonProps {
  value: number;
  activeButton: boolean;
  onClick: () => void
}

const Button: FC<ButtonProps> = ({ value, activeButton, onClick }: ButtonProps) => {
  return (
    <button type='button' className={activeButton ? 'btn-active' : 'btn'} data-testid="btn-list" onClick={onClick}>{value}</button>
  );
}

export default Button;
