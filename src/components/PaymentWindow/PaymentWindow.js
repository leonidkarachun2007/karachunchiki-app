import './PaymentWindow.css';

export function PaymentWindow () {

  return (
    <div className='PaymentWindow'>

      <div id='container_payment1'>
        <div className='checkout'>
        <p>CHECKOUT</p>
        <div className='visa'>
          <input type='checkbox'/>
          <img src='./visa.png' alt='visa' />
          <p>Visa</p>
        </div>
        </div>
      </div>
    </div>
  );

}

export default PaymentWindow;
