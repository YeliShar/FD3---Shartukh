var ProductRow = React.createClass({
	displayName: 'ProductRow',

	propTypes: {
		SamsungnameProduct: React.PropTypes.arrayOf(
		React.PropTypes.shape({
			code: React.PropTypes.number.isRequired,
			nameProduct: React.PropTypes.string.isRequired,
			priceProduct: React.PropTypes.string.isRequired,
			stockBalances: React.PropTypes.string.isRequired,
			})),
			cbSelected: React.PropTypes.func.isRequired,
			cbDelete: React.PropTypes.func.isRequired,
	},
	getInitialState: function() {
		return { 
			SamsungnameProduct: this.props.SamsungnameProduct,
			selectedProductCode: this.props.selectedProductCode,
			cbSelected: this.props.cbSelected,
			cbDelete: this.props.cbDelete,
			deleleteProductCode: this.props.deleleteProductCode,
		};
	},
	onClickHandler: function(code) {
		this.props.cbSelected(this.props.code)
	},
	deleteClick: function (code) {
		confirm('Delete product «'+this.props.nameProduct+'» ?')
		? this.props.cbDelete(this.props.code)
		: null	
	},

	render: function() {
		return React.DOM.div({className: 'ProductsGrid', onClick: this.onClickHandler, key: this.props.code, style: {backgroundColor: (this.props.selectedProductCode == this.props.code) ? '#ff99ff' : null}},
			React.DOM.div({className: 'productElement', },
            React.DOM.div(null, this.props.nameProduct), 
            React.DOM.div(null, this.props.priceProduct),
            React.DOM.div(null, this.props.stockBalances),
            React.DOM.div(null, React.DOM.button( {onClick: this.deleteClick,}, 'Delete'),
            )),
		);
	},
})
