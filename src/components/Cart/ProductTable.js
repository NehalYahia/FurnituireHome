
import AmountButton from './AmountButton';
import DeleteButton from './DeleteButton'
const ProductTable = (props) => {
  return (
    <div class="table table-borderless ">
    <table >
      <tr>
        <th >Product</th>
        <th ></th>
        <th >Color</th>
        <th >Size</th>
        <th >Ammount</th>
        <th >Price</th>
       
      </tr>
      <tr>
        <td >
          <img src="Product1.png" />
        </td>
        <td>
          <h6>T-Shirt Summer Vibes</h6>
          <p>#261311</p>
        </td>
        <td>White</td>
        <td>XL</td>
        <td>
         <AmountButton/>
        </td>
        <td>$89.99</td>
        <td><DeleteButton/></td>
      </tr>
      <tr>
        <td>
          <img src="Product2.png" />
        </td>
        <td>
          <h6>Basic Slim Fit T-Shirt</h6>
          <p>#21315</p>
        </td>
        <td>Black</td>
        <td>XL</td>
        <td> <AmountButton/></td>
        <td>$69,99</td>
        <td><DeleteButton/></td>
      </tr>
    </table>
    </div>
  );
};
export default ProductTable;
