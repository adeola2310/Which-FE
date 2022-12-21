import React from 'react';
import Button from '../Button/Button';
import './CalculatorGrid.scss';


const CalculatorGrid = () => {

    const maxNumber = 144;
    const listOfNumbers: Array<number> = [...Array(maxNumber).keys()];

    const handleMultiplication = (num:number)=>{
        for(let i=1; i < maxNumber; i++){
            if(i % num === 0){

            }

        }
    }
    return (
        <div className='calculator__wrapper'>
            <div className='calculator__wrapper-btns'>
                {
                    listOfNumbers?.map((index) => (
                        <Button value={index + 1} key={index} onClick={()=>handleMultiplication(index + 1)}/>
                    ))
                }

            </div>
        </div>

    )
}

export default CalculatorGrid


