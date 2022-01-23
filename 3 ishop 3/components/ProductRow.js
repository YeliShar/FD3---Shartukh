import React from 'react';
import PropTypes from 'prop-types';

import './ishop3.css';

class ProductRow extends React.Component {

	static propTypes = {
		SamsungnameProduct: PropTypes.arrayOf(
		PropTypes.shape({
			code: PropTypes.number.isRequired,
			nameProduct: PropTypes.string.isRequired,
			priceProduct: PropTypes.string.isRequired,
			stockBalances: PropTypes.string.isRequired,
			})),
			cbSelected: PropTypes.func.isRequired,
			cbDelete: PropTypes.func.isRequired,
	}

	state = {
			SamsungnameProduct: this.props.SamsungnameProduct,
			selectedProductCode: this.props.selectedProductCode,
			cbSelected: this.props.cbSelected,
			cbDelete: this.props.cbDelete,
			deleleteProductCode: this.props.deleleteProductCode,
		}

	onClickHandler = (code) => {
		this.props.cbSelected(this.props.code)
	}

	deleteClick = (code) => {
		confirm('Delete product «'+this.props.nameProduct+'» ?')
		? this.props.cbDelete(this.props.code)
		: null	
	}

	render() {
		return (
			<div className = 'ProductsGrid' onClick = {this.onClickHandler} key = {this.props.code} style={ {backgroundColor: (this.props.selectedProductCode == this.props.code) ? '#ff99ff' : null}}>
				<div className='productElement'>
					<div> {this.props.nameProduct} </div>
					<div> {this.props.priceProduct} </div>
					<div> {this.props.stockBalances} </div>
					<div>
						<button onClick = {this.deleteClick}>'Delete'</button>
					</div>
				</div>
			</div>
		)
	}
}
export default ProductRow;