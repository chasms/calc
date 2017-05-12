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
        <Button type='AC' />
        <Button type='+/-' />
        <Button type='%' />
        <Button type='÷' />
        <Button type='7' />
        <Button type='8' />
        <Button type='9' />
        <Button type='×' />
        <Button type='4' />
        <Button type='5' />
        <Button type='6' />
        <Button type='−' />
        <Button type='1' />
        <Button type='2' />
        <Button type='3' />
        <Button type='+' />
        <Button type='0' />
        <Button type='.' />
        <Button type='=' />
      </div>
    );
  }
}

export default App;
