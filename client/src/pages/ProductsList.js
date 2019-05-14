// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import ProductsActions from "../redux/actions/ProductsActions";

// END IMPORT ACTIONS

/** APIs

* actionsProducts.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsProducts.list
*	@description CRUD ACTION list
*

**/


class ProductsList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsProducts.loadProductsList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsProducts.deleteProducts(this.state.idDelete).then(data => {
      this.props.actionsProducts.loadProductsList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "Description",
        type: "string",
        label: "Description"
      }, 
      {
        id: "Name",
        type: "string",
        label: "Name"
      }, 
      {
        id: "Pricing",
        type: "number",
        label: "Pricing"
      }, 
      {
        id: "Weight",
        type: "number",
        label: "Weight"
      },
    ];
    const link = "/productses/";

    return (
      <div>
        <h1>Products List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Pricing</TableCell>
              <TableCell align="right">Weight</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/productses/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.Description }</TableCell>
                <TableCell align="right">{ row.Name }</TableCell>
                <TableCell align="right">{ row.Pricing }</TableCell>
                <TableCell align="right">{ row.Weight }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/productses/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
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
ProductsList.propTypes = { 
  actionsProducts: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.ProductsListReducer.listProducts
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsList);
