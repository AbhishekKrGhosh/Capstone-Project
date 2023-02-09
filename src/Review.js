import React from 'react';
import './Review.css'
import kettle from './Images/kettle.jpg'

import Form from 'react-bootstrap/Form';

function Review() {
        return (
            <div className='center form-outline mb-4'>
              <h1>Your review</h1>
                <Form >
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Review:
              <input type="text" name="name" />
            </label>
            <label>
              Suggestion:
              <input type="text" name="name" />
            </label>
            <input className='submit button' type="submit" value="Submit" />
          </Form>
      
                <img src={kettle}/>
            </div>
        );
    }

export default Review;