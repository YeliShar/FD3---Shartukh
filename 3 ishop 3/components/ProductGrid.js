import React from 'react';
import PropTypes from 'prop-types';
import './ishop3.css';
import ProductRow from './ProductRow';

class ProductGrid extends React.Component {

	static propTypes = {
		Samsungshop: PropTypes.array.isRequired,
		SamsungnameProduct: PropTypes.arrayOf(
			React.PropTypes.shape({
				code: PropTypes.number.isRequired,
				nameProduct: PropTypes.string.isRequired,
				priceProduct: PropTypes.string.isRequired,
				stockBalances: PropTypes.string.isRequired,
			})),
		};
		
		state = {
				Samsungshop: this.props.Samsungshop,
				SamsungnameProduct: this.props.SamsungnameProduct,
				selectedProductCode: null,
				deleleteProductCode: null,
			};
		

		onClickHandler = (code) => {
			this.setState({selectedProductCode: code})
		}

		deleteClick = (code)  => {
			var newArray = [];
			this.state.SamsungnameProduct.forEach (e => {
				if (e.code != code) {
					newArray.push(e)
				}
			}) 
			this.setState({SamsungnameProduct: newArray})
		}
		
		render() {
		var SamsungNameShop = [];
		this.state.Samsungshop.forEach(element => {
			var SamsungshopName = Object.values(element);
			var nameShopCode = 	<div className='shopName' key={SamsungshopName[0]} > {SamsungshopName[1]} </div>
			SamsungNameShop.push(nameShopCode);
		});
		
		var product = [];
		this.state.SamsungnameProduct.forEach ( element => {
			var productCode =  <div><div className='ishop' key={element.code}> {SamsungNameShop}  </div>
			<div className='ishop' key = {element.code}> {SamsungNameShop}
			<ProductRow Samsungshop ={this.props.Samsungshop} 
			code = {element.code}
			nameProduct = {element.nameProduct}
			priceProduct = {element.priceProduct}
			stockBalances = {element.stockBalances}
			cbSelected = {this.onClickHandler}
			selectedProductCode = {this.state.selectedProductCode}
			cbDelete = {this.deleteClick} />
			</div>
			</div>
			product.push(productCode);
		},
		)
		return <div> {product} </div>
	};		
};

export default ProductGrid;