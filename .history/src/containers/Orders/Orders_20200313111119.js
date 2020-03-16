import React, {Component} from 'react';
import {connect} from 'react-redux'

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount () {
        this.props.onFetchOrders();
    }

    render() {
        return(
            <div>
                {this.state.orders.map(order => (
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price} />
                ))}
            </div>
        );
    }
}

// const mapStateToProps = state => {
//     return{
        
//     }
// };

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders:  () => dispatch(actions.fetchOrders())
    };
};


export default connect(null, mapDispatchToProps) (withErrorHandler(Orders, axios));