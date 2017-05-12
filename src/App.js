// module imports
import React, { Component } from 'react';

// app imports
import Button from './components/Button'
import Console from './components/Console'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Console />
        <Button val='AC' type='clear' />
        <Button val='+/-' type='modifier' />
        <Button val='%' type='modifier' />
        <Button val='÷' type='operator' />
        <Button val='7' type='num' />
        <Button val='8' type='num' />
        <Button val='9' type='num' />
        <Button val='×' type='operator' />
        <Button val='4' type='num' />
        <Button val='5' type='num' />
        <Button val='6' type='num' />
        <Button val='−' type='operator' />
        <Button val='1' type='num' />
        <Button val='2' type='num' />
        <Button val='3' type='num' />
        <Button val='+' type='operator' />
        <Button val='0' type='num' />
        <Button val='.' type='decimal' />
        <Button val='=' type='operator' />
      </div>
    );
  }
}

export default App;
