import React from 'react';
import { useHistory } from 'react-router-dom';

import './Checkout.scss';
import { useCheckout } from './hooks';
import { Price, Button, Input, Nav } from 'components/atoms';

const Checkout = () => {
	const history = useHistory();
	const { total, disableSubmit, submitted, setName, setEmail, setCreditCard, submitOrder } = useCheckout();

	return <div className="checkout">
		{submitted ?
			<div className="checkout__success">
				<h1>Thanks for your purchase!</h1>
				<Button onClick={() => history.push('/')}>Back to shop</Button>
			</div> :
			<>
				<Nav backTo="/cart" title="Checkout" color="neutral" />
				<div className="checkout__body">
					<div>
						<h3>Fill payment data</h3>
						<Input placeholder="Name" changeHandler={(e) => setName(e.target.value)} />
						<Input placeholder="Email" changeHandler={(e) => setEmail(e.target.value)} />
						<Input placeholder="Card Number" changeHandler={(e) => setCreditCard(e.target.value)} />
					</div>
					<div>
						<h3>You are going to pay</h3>
						<Price small price={total} />
					</div>
				</div>
				<Button disabled={disableSubmit} className="checkout__confirm" onClick={submitOrder} color="secondary">Confirm payment</Button>
			</>
		}
	</div>
};

export default Checkout;
