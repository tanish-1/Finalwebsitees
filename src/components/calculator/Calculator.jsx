import React, { useState } from 'react';
import "./calculator.css";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');

  const addToDisplay = (value) => {
    setDisplayValue((prevValue) => prevValue + value);
  };

  const clearDisplay = () => {
    setDisplayValue('');
  };

  const calculateResult = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <form name="calculator">
      <table className="table">
        <thead>
          <tr>
            <th colSpan="4" id="cal">Calulator</th>
          </tr>
          <tr>
            <th colSpan="4">
              <input
                type="text"
                name="display"
                id="display"
                placeholder="0"
                value={displayValue}
                disabled
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><button type="button" className="button" onClick={() => addToDisplay('7')}>7</button></td>
            <td><button type="button" className="button" onClick={() => addToDisplay('8')}>8</button></td>
            <td><button type="button" className="button" onClick={() => addToDisplay('9')}>9</button></td>
            <td><button type="button" className="button" onClick={() => addToDisplay('+')}>+</button></td>
          </tr>
          <tr>
            <td><button type="button" className="button" onClick={() => addToDisplay('4')}>4</button></td>
            <td><button type="button" className="button" onClick={() => addToDisplay('5')}>5</button></td>
            <td><button type="button" className="button" onClick={() => addToDisplay('6')}>6</button></td>
            <td><button type="button" className="button" onClick={() => addToDisplay('-')}>-</button></td>
          </tr>
          <tr>
            <td><button type="button" className="button" onClick={() => addToDisplay('1')}>1</button></td>
            <td><button type="button" className="button" onClick={() => addToDisplay('2')}>2</button></td>
            <td><button type="button" className="button" onClick={() => addToDisplay('3')}>3</button></td>
            <td><button type="button" className="button" onClick={() => addToDisplay('*')}>*</button></td>
          </tr>
          {/* Add other rows similarly */}
          <tr>
            <td><button type="button" className="button" onClick={() => addToDisplay('0')}>0</button></td>
            <td><button type="button" className="button" onClick={() => addToDisplay('.')}>.</button></td>
            <td><button type="button" className="button" onClick={clearDisplay}>C</button></td>
            <td><button type="button" className="button" onClick={calculateResult} id="hi">=</button></td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Calculator;
