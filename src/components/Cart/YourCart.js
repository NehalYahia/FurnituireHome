
import AmountButton from './AmountButton';
import DeleteButton from './DeleteButton'
const YourCart = (props) => {
  return (
    <div class="tableCart">
    <table >
      <tr>
        <td >
          <img src="Product1.png" />
        </td>
        <td>
          <h6>T-Shirt </h6>
          <h6>Summer Vibes</h6>
          <p>#261311</p>
        </td>
        <td>$89.99</td>
      </tr>
      <tr>
        <td>
          <img src="Product2.png" />
        </td>
        <td>
          <h6>Basic Slim </h6>
          <h6>Fit T-Shirt </h6>
          <p>#21315</p>
        </td>
        <td>$69,99</td>
      </tr>
    </table>
    </div>
  );
};
export default YourCart;
