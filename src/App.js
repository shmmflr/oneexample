import React, { Component } from 'react';

// import { Button } from '@material-ui/core';
import { Button, Alert, Badge } from 'react-bootstrap';
import {ToastContainer , Toast, toast} from 'react-toastify'

export class App extends Component {
  state = {
    show: true,
  };
  show = () => {
    this.setState({
      show: !this.state.show,
    });
    toast.success('احسنت به این همه شهامت لبیک یا حسین .' ,{
      position: 'top-left',
      autoClose: true,
      closeButton :true,

    })
  };
  render() {
    const { show } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <Alert variant="info">
          <h1>به نام خداوند بخشنده مهربان</h1>
        </Alert>
        <Alert variant="secondary">
          <h5>
            تهداد حاضران موجود در جلسه{' '}
            <Badge variant="warning" pill>
              5
            </Badge>{' '}
            می باشد
          </h5>
        </Alert>
        <Button variant={show ? 'info' : 'light'} onClick={this.show} size="">
          shoeib
        </Button>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
