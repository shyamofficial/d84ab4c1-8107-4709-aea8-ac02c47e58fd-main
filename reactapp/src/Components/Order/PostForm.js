import React, { Component } from 'react'
import axios from 'axios'
import Order from './Order'
import "./order.css";
class PostForm extends Component {

	constructor(props) {
		super(props)

		this.state = {
			orderId:'',
			userId:'',
			totalPrice:'',
			productName: '',
			price: '',
			quantity: '',
			status:'',

		}
		
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	submitHandler = e => {
		// e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:8081/order/placeOrder', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
			// window.location.reload(false)
	}
	

	render() {
		const { orderId, userId, productName, price, quantity, status, totalPrice } = this.state
		return (
				<form onSubmit={this.submitHandler}>
				<div class="row">
				<div class="row col-md-6">
				<div class="form-floating col-sm-4">
						<input
							class="form-control"
							id="floatingInput"
							type="text"
							name="orderId"
							value={orderId}
							onChange={this.changeHandler}
						/>
						<label for="orderId"  class="m-2"> OrderId </label>
					</div>
					<div class="form-floating col-sm-4">
						<input
							class="form-control"
							id="floatingInput"
							type="text"
							name="userId"
							value={userId}
							onChange={this.changeHandler}
						/>
						<label for="userId"  class="m-2"> userId </label>
					</div>
					<div class="form-floating col-sm-4">
						<input
							class="form-control"
							id="floatingInput"
							type="text"
							name="productName"
							value={productName}
							onChange={this.changeHandler}
						/>
						<label for="productName" class="m-2"> product </label>
					</div>
					<div class="form-floating col-sm-4">
						<input
							class="form-control"
							id="floatingInput"
							type="int"
							name="quantity"
							value={quantity}
							onChange={this.changeHandler}
						/>
						<label for="quantity"  class="m-2"> quantity </label>
					</div>
					</div>
					<div class="row col-sm-6">
					<div class="form-floating col-sm-4">
						<input
							class="form-control"
							id="floatingInput"
							type="text"
							name="price"
							value={price}
							onChange={this.changeHandler}
						/>
						<label for="price"  class="m-2"> Price </label>
					</div>
					<div class="form-floating col-sm-4">
						<input
							class="form-control"
							id="floatingInput"
							type="text"
							name="totalPrice"
							value={totalPrice}
							onChange={this.changeHandler}
						/>
					<label for="floatingInput"  class="m-2"> Total price </label>
					</div>
					<div class="form-floating col-sm-4">
						<input
							class="form-control"
							id="floatingInput"
							type="text"
							name="status"
							value={status}
							onChange={this.changeHandler}
						/>
						<label for="status"  class="m-2"> Status </label>
					</div>
					</div>
					<Order/>
					<button type="submit" class="btn col-md-2">Pay Now</button>
			</div>
				</form>
		)
	}
}

export default PostForm