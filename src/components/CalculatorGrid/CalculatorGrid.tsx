import React, { useState } from 'react';
import Button from '../Button/Button';
import './CalculatorGrid.scss';


const CalculatorGrid = () => {

    const [activeButton, setActiveButton] = useState<boolean>(false);

    const maxNumber = 144;
    const listOfNumbers: Array<number> = [...Array(maxNumber).keys()];

    const handleMultiplication = () => {
        // if(val % index === 0){
            setActiveButton(true)

        // }
    }

    return (
        <div className='calculator__wrapper'>
            <div className='calculator__wrapper-btns'>
                {
                    listOfNumbers.map((index) => (
                        <Button
                            value={index + 1}
                            activeButton={activeButton}
                            key={index}
                            onClick={()=>handleMultiplication()} />
                    ))
                }

            </div>
        </div>

    )
}

export default CalculatorGrid


