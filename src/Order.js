import React, { Component } from 'react';
import glass from './Images/glass.jpg';
import './Order.css'

import Form from 'react-bootstrap/Form';
class Order extends Component {
    render() {
        return (
            <div>
                <div class="parent">
<div class="div10"><h1>
    Your Orders</h1>
    <Form>
    <label>
              Your Order:
              <input type="text" name="name" className='newForm' />
            </label>
            <input className='submit button' type="submit" value="Submit" />
          </Form>
    </div>
<div class="div20"><img src={glass}/></div>
</div>
            </div>
        );
    }
}

export default Order;