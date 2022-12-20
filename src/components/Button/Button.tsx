import {FC} from 'react';

export interface ButtonProps{
    value: number
}

const Button: FC<ButtonProps> = ({value}: ButtonProps) => {
  return (
  <button>{value}</button>

  );
}

export default Button;
