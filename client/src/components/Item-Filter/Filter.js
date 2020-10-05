// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { filterProducts} from "../../actions/itemActions";
// class Filter extends Component {
//   render() {
//     return (
//       <div className="row">
//         <div className="col-md-4">
//           <label>
//             {" "}
//             Filter Governorate
//             <select
//               className="form-control"
//               value={this.props.size}
//               onChange={(event) => {
//                 this.props.filterProducts(
//                   this.props.products,
//                   event.target.value
//                 );
//               }}
//             >
//               <option value="">Bizerte</option>
//               <option value="x">Jandouba</option>
//               <option value="s">Kairouan</option>
//               {/* <option value="m">M</option>
//               <option value="l">L</option>
//               <option value="xl">XL</option>
//               <option value="xxl">XXL</option> */}
//             </select>
//           </label>
//         </div>
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => ({
//   products: state.products.items,
//   filteredProducts: state.products.filteredItems,
//   governorate: state.products.governorate
// });
// export default connect(mapStateToProps, { filterProducts})(
//   Filter
// );