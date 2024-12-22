import { Container, Content, Row } from './styles';
import Input from './Components/Input';
import Button from './Components/Button';
import './App.css';
import { useState } from 'react';

function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }
  const handleClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
  }

  const handleOperation = (operation) => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation(operation)
    }

  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleSubNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-')
    } else {
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleDivideNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/')
    } else {
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMultiplyNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('*')
    } else {
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers()
          break;
        case '-':
          handleSubNumbers()
          break;
        case '*':
          handleMultiplyNumbers()
          break;
        case '/':
          handleDivideNumbers()
          break;

        default:
          break;
      }
    }
  }
  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={() => handleOperation('*')} />
          <Button label="/" onClick={() => handleOperation('/')} />
          <Button label="C" onClick={handleClear} />
          <Button label="X" />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={() => handleOperation('-')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={() => handleOperation('+')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={() => handleEquals()} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
