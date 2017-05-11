import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Console />
        <Button type='clear' />
        <Button type='negative' />
        <Button type='percent' />
        <Button type='divide' />
        <Button type='7' />
        <Button type='8' />
        <Button type='9' />
        <Button type='multiply' />
        <Button type='4' />
        <Button type='5' />
        <Button type='6' />
        <Button type='subtract' />
        <Button type='1' />
        <Button type='2' />
        <Button type='3' />
        <Button type='add' />
        <Button type='0' />
        <Button type='decimal' />
        <Button type='evaluate' />
      </div>
    );
  }
}

export default App;
