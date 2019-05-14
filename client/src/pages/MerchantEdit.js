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
import MerchantActions from "../redux/actions/MerchantActions";

// END IMPORT ACTIONS

/** APIs

* actionsMerchant.create
*	@description CRUD ACTION create
*
* actionsMerchant.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id 
*
* actionsMerchant.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*

**/

class MerchantEdit extends Component {
  // Init merchant
  constructor(props) {
    super(props);
    this.state = {
      merchant: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsMerchant.loadMerchant(this.props.match.params.id);
    }
    
  }

  // Insert props merchant in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      merchant: props.merchant
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.merchant._id) {
      this.props.actionsMerchant.saveMerchant(this.state.merchant).then(data => {
        this.props.history.push("/merchants/");
      });
    } else {
      this.props.actionsMerchant.createMerchant(this.state.merchant).then(data => {
        this.props.history.push("/merchants/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Merchant Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="BusinessCategory"
            label="BusinessCategory"
            value={this.state.merchant.BusinessCategory || ""}
            onChange={Utils.handleChange.bind(this, "merchant")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.merchant.BusinessCategory && this.state.merchant.BusinessCategory === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="BusinessName"
            label="BusinessName"
            value={this.state.merchant.BusinessName || ""}
            onChange={Utils.handleChange.bind(this, "merchant")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.merchant.BusinessName && this.state.merchant.BusinessName === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Name"
            label="Name"
            value={this.state.merchant.Name || ""}
            onChange={Utils.handleChange.bind(this, "merchant")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.merchant.Name && this.state.merchant.Name === ""
              ? { error: true }
              : {})}
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/merchants/">Back to list</Link>

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
    actionsMerchant: bindActionCreators(MerchantActions, dispatch),
  };
};

// Validate types
MerchantEdit.propTypes = { 
  actionsMerchant: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    merchant: state.MerchantEditReducer.merchant
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MerchantEdit);
