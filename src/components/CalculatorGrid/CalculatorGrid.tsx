import React, { useState } from 'react';
import Button from '../Button/Button';
import './CalculatorGrid.scss';


const CalculatorGrid = () => {

    const [selectedNumber, setSelectedNumber] = useState<number>(0);

    const maxNumber = 144;

    const listOfNumbers = [] as Array<number>;
    for (let i = 0; i < maxNumber; i++) {
        listOfNumbers.push(i)
    }

    const handleMultiplication = (val: number) => {
        setSelectedNumber(val)
    }

    return (
        <div className='calculator__wrapper'>
            <div className='calculator__wrapper-btns'>
                {
                    listOfNumbers.map((index) => (
                        <Button
                            value={index + 1}
                            key={index}
                            selectedNumber={selectedNumber}
                            onClick={() => handleMultiplication(index + 1)} />
                    ))
                }

            </div>
        </div>

    )
}

export default CalculatorGrid


