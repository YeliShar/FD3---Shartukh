var ProductGrid = React.createClass({

	displayName: 'ProductGrid',

	propTypes: {
		Samsungshop: React.PropTypes.array.isRequired,
		SamsungnameProduct: React.PropTypes.arrayOf(
			React.PropTypes.shape({
				code: React.PropTypes.number.isRequired,
				nameProduct: React.PropTypes.string.isRequired,
				priceProduct: React.PropTypes.string.isRequired,
				stockBalances: React.PropTypes.string.isRequired,
			})),
		},
		
		getInitialState: function() {
			return { 
				Samsungshop: this.props.Samsungshop,
				SamsungnameProduct: this.props.SamsungnameProduct,
				selectedProductCode: null,
				deleleteProductCode: null,
			};
		},
		onClickHandler: function(code) {
			this.setState({selectedProductCode: code})
		},
		deleteClick: function(code) {
			var newArray = [];
			this.state.SamsungnameProduct.forEach (e => {
				e.code != code ? newArray.push(e) : e.code == e.code
			}) 
			this.setState({SamsungnameProduct: newArray})
		},
		
		render: function() {
		var SamsungNameShop = [];
		this.state.Samsungshop.forEach(element => {
			var SamsungshopName = Object.values(element);
			var nameShopCode = 		
			React.DOM.div({className: 'shopName', key: SamsungshopName[0], }, SamsungshopName[1], );
			SamsungNameShop.push(nameShopCode);
		});
		
		var product = [];
		this.state.SamsungnameProduct.forEach ( element => {
			var productCode = 		
			React.DOM.div({key: element.code, className:'ishop', }, SamsungNameShop, 
			React.createElement (ProductRow, {Samsungshop: this.props.Samsungshop, 
				code: element.code,
				nameProduct: element.nameProduct, 
				priceProduct: element.priceProduct, 
				stockBalances: element.stockBalances,
				cbSelected: this.onClickHandler,
				selectedProductCode: this.state.selectedProductCode,
				cbDelete: this.deleteClick,
			}),
			)
			product.push(productCode);
		},
		)
		return React.DOM.div(null, product)
	}		
});
