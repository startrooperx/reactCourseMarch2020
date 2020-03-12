import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Input from '../../../components/UI/Input/Input';

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
            ingredients: this.props.ingredients,
            price: this.props.price,
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
                this.props.history.push('/');
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }

    render() {
        let form = (
            <form>
                    <Input type="input" name="name" placeholder="Your Name" />
                    <Input type="input" name="email" placeholder="Your Mail" />
                    <Input type="input" name="street" placeholder="Your Street" />
                    <Input type="input" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
        );
        if(this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4> Enter your Contact Data </h4>
                {form}
            </div>
        )
    }
}

export default ContactData;