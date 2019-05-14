// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Custom Actions


// START IMPORT ACTIONS
import ProductsActions from "../redux/actions/ProductsActions";

// END IMPORT ACTIONS

/** APIs

* actionsProducts.create
*	@description CRUD ACTION create
*
* actionsProducts.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id 
*
* actionsProducts.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*

**/

class ProductsEdit extends Component {
  // Init products
  constructor(props) {
    super(props);
    this.state = {
      products: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsProducts.loadProducts(this.props.match.params.id);
      this.props.actionsWishlist.findBywishprdcts(this.props.match.params.id);
    }
    
  }

  // Insert props products in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      products: props.products
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.products._id) {
      this.props.actionsProducts.saveProducts(this.state.products).then(data => {
        this.props.history.push("/productses/");
      });
    } else {
      this.props.actionsProducts.createProducts(this.state.products).then(data => {
        this.props.history.push("/productses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Products Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Description"
            label="Description"
            value={this.state.products.Description || ""}
            onChange={Utils.handleChange.bind(this, "products")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.products.Description && this.state.products.Description === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Name"
            label="Name"
            value={this.state.products.Name || ""}
            onChange={Utils.handleChange.bind(this, "products")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.products.Name && this.state.products.Name === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Pricing"
            label="Pricing"
            value={this.state.products.Pricing || ""}
            onChange={Utils.handleChange.bind(this, "products")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.products.Pricing && this.state.products.Pricing === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Weight"
            label="Weight"
            value={this.state.products.Weight || ""}
            onChange={Utils.handleChange.bind(this, "products")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.products.Weight && this.state.products.Weight === ""
              ? { error: true }
              : {})}
          />
          
          {/* RELATIONS */}

          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with wishlist */}
          
          <h3>Wishlist</h3>
          {(!this.props.listWishlist || this.props.listWishlist.length === 0) && 
            <div>No Wishlist associated</div>
          }
          {this.props.listWishlist &&
            this.props.listWishlist.map((item, i) => {
              return (
                <Link to={"/wishlists/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/productses/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsProducts: bindActionCreators(ProductsActions, dispatch),
  };
};

// Validate types
ProductsEdit.propTypes = { 
  actionsProducts: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    products: state.ProductsEditReducer.products,
    listWishlist: state.ProductsEditReducer.listWishlist
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsEdit);
