import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState( { loading: true } );
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Wlodzimierz Azarko',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Warsaw'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'ASAP'
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false } );
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4> Enter your Contact Data </h4>
                <form>
                    <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
                    <input className={classes.Input} type="text" name="email" placeholder="Your Mail" />
                    <input className={classes.Input} type="text" name="street" placeholder="Your Street" />
                    <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ContactData;