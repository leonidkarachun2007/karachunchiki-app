import './PaymentWindow.css';
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";






export function PaymentWindow ({close}) {
    const [openvisa, setOpenVisa] = useState(false);
        const [openmastercard, setOpenMasterCard] = useState(false);
    const [opencheckvisa, setOpenCheckVisa] = useState(false);
        const [opencheckmastercard, setOpenCheckMasterCard] = useState(false);
        const [opencheckorder, setOpenCheckOrder] = useState(false);
    const [openborder, setOpenBorder] = useState(false);
        const [opencompletionofpurchase, setСompletionoOfPurchase] = useState(false);

        const [errorCardNumberVisa, setErrorCardNumberVisa] = useState(false);
const [errorNameVisa, setErrorNameVisa] = useState(false);
const [errorExpirationVisa, setErrorExpirationVisa] = useState(false);
const [errorCVVVisa, setErrorCVVVisa] = useState(false);

        const [errorCardNumberMasterCard, setErrorCardNumberMasterCard] = useState(false);
const [errorNameMasterCard, setErrorNameMasterCard] = useState(false);
const [errorExpirationMasterCard, setErrorExpirationMasterCard] = useState(false);
const [errorCVVMasterCard, setErrorCVVMasterCard] = useState(false);


function handleCardNumberBlurVisa(e) {
  setErrorCardNumberVisa(e.target.value.trim() === "");
}

function handleNameBlurVisa(e) {
  setErrorNameVisa(e.target.value.trim() === "");
}

function handleExpirationBlurVisa(e) {
  setErrorExpirationVisa(e.target.value.trim() === "");
}

function handleCVVBlurVisa(e) {
  setErrorCVVVisa(e.target.value.trim() === "");
}

function handleCardNumberBlurMasterCard(e) {
  setErrorCardNumberMasterCard(e.target.value.trim() === "");
}

function handleNameBlurMasterCard(e) {
  setErrorNameMasterCard(e.target.value.trim() === "");
}

function handleExpirationBlurMasterCard(e) {
  setErrorExpirationMasterCard(e.target.value.trim() === "");
}

function handleCVVBlurMasterCard(e) {
  setErrorCVVMasterCard(e.target.value.trim() === "");
}

  return (
    
    <div className='PaymentWindow'>

      <div id='container_payment1'>
        <div className='checkout' >
        <p className='text_payment_information'>CHECKOUT</p>
        <div className={openvisa ? "border_active" : ""}
  onClick={() => setOpenBorder(!openborder)}>
        <div className='accordion_payment_method' onClick={() => {setOpenVisa(!openvisa); setOpenMasterCard(false);}}>
          <img 
  src={openvisa ? "/square_input_active.png" : "/squareinput.png"}
  onClick={() => setOpenVisa(!openvisa)}
/>
          <img src='./visa.png' alt='visa'/>
          <p className='text_payment_method'>Visa</p>
        </div>
        {openvisa && 
          <div className='accordion_payment_method_active'>
            <p className='text_card_details'>CARD DETAILS</p>
            <div className='inputs_payment'>
            <div className='container_input_payment'>
  <p className='text_payment'>
    Card number {errorCardNumberVisa && <span style={{color: '#ff6060'}}>(an error was made)</span>}
  </p>

  <input
    type="text"
    className={`input_payment ${errorCardNumberVisa ? "error" : ""}`}
    onBlur={handleCardNumberBlurVisa}
  />

            </div>



             <div className='container_input_payment'>

  <p className='text_payment'>
    Name on card {errorNameVisa && <span style={{color: '#ff6060'}}>(an error was made)</span>}
  </p>

  <input
    type="text"
    className={`input_payment ${errorNameVisa ? "error" : ""}`}
    onBlur={handleNameBlurVisa}
  />
             </div>


             <div className='container_input_payment'>

  <p className='text_payment'>
    Expiration {errorExpirationVisa && <span style={{color: '#ff6060'}}>(an error was made)</span>}
  </p>

  <input
    type="text"
    className={`input_payment2 ${errorExpirationVisa ? "error" : ""}`}
    onBlur={handleExpirationBlurVisa}
  />
              
             </div>

              <div className='container_input_payment'>


  <p className='text_payment'>
    CVV {errorCVVVisa && <span style={{color: '#ff6060'}}>(an error was made)</span>}
  </p>

  <input
    type="text"
    className={`input_payment2 ${errorCVVVisa ? "error" : ""}`}
    onBlur={handleCVVBlurVisa}
  />
             </div>

             </div>

             <div className='agreement'>
                        <img style={{cursor: 'pointer'}}
  src={opencheckvisa ? "/square_input_active.png" : "/square_input_2.png"}
  onClick={() => setOpenCheckVisa(!opencheckvisa)}
/>
<p className='text_payment'>Save this payment method for future purchase?</p>
              </div>
              <p className='description_payment'>By choosing to save your payment information, this payment method will be selected as the default for all purchases made using Epic Games payment, including purchases in Fortnite, Rocket League, Fall Guys and the Epic Games Store. You can delete your saved payment information anytime on this payment screen or by logging in to your Epic Games account, and selecting payment management in your account settings</p>
        </div>
        }
        </div>

{/* --- */}
                <div className={openmastercard ? "border_active" : ""}
  onClick={() => setOpenBorder(!openborder)}>
        <div className='accordion_payment_method' onClick={() => {setOpenMasterCard(!openmastercard); setOpenVisa(false);}}>
          <img style={{cursor: 'pointer'}}
  src={openmastercard ? "/square_input_active.png" : "/squareinput.png"}
  onClick={() => setOpenMasterCard(!openmastercard)}
/>
          <img src='./mastercard.png' alt='mastercard'/>
          <p className='text_payment_method'>MasterCard</p>
        </div>
        {openmastercard && 
          <div className='accordion_payment_method_active'>
            <p className='text_card_details'>CARD DETAILS</p>
            <div className='inputs_payment'>
            <div className='container_input_payment'>
  <p className='text_payment'>
    Card number {errorCardNumberMasterCard && <span style={{color: '#ff6060'}}>(an error was made)</span>}
  </p>

  <input
    type="text"
    className={`input_payment ${errorCardNumberMasterCard ? "error" : ""}`}
    onBlur={handleCardNumberBlurMasterCard}
  />

            </div>



             <div className='container_input_payment'>

  <p className='text_payment'>
    Name on card {errorNameMasterCard && <span style={{color: '#ff6060'}}>(an error was made)</span>}
  </p>

  <input
    type="text"
    className={`input_payment ${errorNameMasterCard ? "error" : ""}`}
    onBlur={handleNameBlurMasterCard}
  />
             </div>


             <div className='container_input_payment'>

  <p className='text_payment'>
    Expiration {errorExpirationMasterCard && <span style={{color: '#ff6060'}}>(an error was made)</span>}
  </p>

  <input
    type="text"
    className={`input_payment2 ${errorExpirationMasterCard ? "error" : ""}`}
    onBlur={handleExpirationBlurMasterCard}
  />
              
             </div>

              <div className='container_input_payment'>


  <p className='text_payment'>
    CVV {errorCVVMasterCard && <span style={{color: '#ff6060'}}>(an error was made)</span>}
  </p>

  <input
    type="text"
    className={`input_payment2 ${errorCVVMasterCard ? "error" : ""}`}
    onBlur={handleCVVBlurMasterCard}
  />
             </div>

             </div>

             <div className='agreement'>
                        <img style={{cursor: 'pointer'}}
  src={opencheckmastercard ? "/square_input_active.png" : "/square_input_2.png"}
  onClick={() => setOpenCheckMasterCard(!opencheckmastercard)}
/>
<p className='text_payment'>Save this payment method for future purchase?</p>
              </div>
              <p className='description_payment'>By choosing to save your payment information, this payment method will be selected as the default for all purchases made using Epic Games payment, including purchases in Fortnite, Rocket League, Fall Guys and the Epic Games Store. You can delete your saved payment information anytime on this payment screen or by logging in to your Epic Games account, and selecting payment management in your account settings</p>
        </div>
        }
        </div>

        </div>

        <div className='order_summary'>
          
        <div className='checkout_mobile' >
        <p className='text_payment_information'>CHECKOUT</p>
        <div className={openvisa ? "border_active" : ""}
  onClick={() => setOpenBorder(!openborder)}>
        <div className='accordion_payment_method' onClick={() => {setOpenVisa(!openvisa); setOpenMasterCard(false);}}>
          <img 
  src={openvisa ? "/square_input_active.png" : "/squareinput.png"}
  onClick={() => setOpenVisa(!openvisa)}
/>
          <img src='./visa.png' alt='visa'/>
          <p className='text_payment_method'>Visa</p>
        </div>
        {openvisa && 
          <div className='accordion_payment_method_active'>
            <p className='text_card_details'>CARD DETAILS</p>
            <div className='inputs_payment'>
            <div className='container_input_payment'>
  <p className='text_payment'>
    Card number {errorCardNumberVisa && <span style={{color: '#ff6060'}}>(an error was made)</span>}
  </p>

  <input
    type="text"
    className={`input_payment ${errorCardNumberVisa ? "error" : ""}`}
    onBlur={handleCardNumberBlurVisa}
  />

            </div>



             <div className='container_input_payment'>

  <p className='text_payment'>
    Name on card {errorNameVisa && <span style={{color: '#ff6060'}}>(an error was made)</span>}
  </p>

  <input
    type="text"
    className={`input_payment ${errorNameVisa ? "error" : ""}`}
    onBlur={handleNameBlurVisa}
  />
             </div>


             <div className='container_input_payment'>

  <p className='text_payment'>
    Expiration {errorExpirationVisa && <span style={{color: '#ff6060'}}>(an error was made)</span>}
  </p>

  <input
    type="text"
    className={`input_payment2 ${errorExpirationVisa ? "error" : ""}`}
    onBlur={handleExpirationBlurVisa}
  />
              
             </div>

              <div className='container_input_payment'>


  <p className='text_payment'>
    CVV {errorCVVVisa && <span style={{color: '#ff6060'}}>(an error was made)</span>}
  </p>

  <input
    type="text"
    className={`input_payment2 ${errorCVVVisa ? "error" : ""}`}
    onBlur={handleCVVBlurVisa}
  />
             </div>

             </div>

             <div className='agreement'>
                        <img style={{cursor: 'pointer'}}
  src={opencheckvisa ? "/square_input_active.png" : "/square_input_2.png"}
  onClick={() => setOpenCheckVisa(!opencheckvisa)}
/>
<p className='text_payment'>Save this payment method for future purchase?</p>
              </div>
              <p className='description_payment'>By choosing to save your payment information, this payment method will be selected as the default for all purchases made using Epic Games payment, including purchases in Fortnite, Rocket League, Fall Guys and the Epic Games Store. You can delete your saved payment information anytime on this payment screen or by logging in to your Epic Games account, and selecting payment management in your account settings</p>
        </div>
        }
        </div>


                <div className={openmastercard ? "border_active" : ""}
  onClick={() => setOpenBorder(!openborder)}>
        <div className='accordion_payment_method' onClick={() => {setOpenMasterCard(!openmastercard); setOpenVisa(false);}}>
          <img style={{cursor: 'pointer'}}
  src={openmastercard ? "/square_input_active.png" : "/squareinput.png"}
  onClick={() => setOpenMasterCard(!openmastercard)}
/>
          <img src='./mastercard.png' alt='mastercard'/>
          <p className='text_payment_method'>MasterCard</p>
        </div>
        {openmastercard && 
          <div className='accordion_payment_method_active'>
            <p className='text_card_details'>CARD DETAILS</p>
            <div className='inputs_payment'>
            <div className='container_input_payment'>
  <p className='text_payment'>
    Card number {errorCardNumberMasterCard && <span style={{color: '#ff6060'}}>(an error was made)</span>}
  </p>

  <input
    type="text"
    className={`input_payment ${errorCardNumberMasterCard ? "error" : ""}`}
    onBlur={handleCardNumberBlurMasterCard}
  />

            </div>



             <div className='container_input_payment'>

  <p className='text_payment'>
    Name on card {errorNameMasterCard && <span style={{color: '#ff6060'}}>(an error was made)</span>}
  </p>

  <input
    type="text"
    className={`input_payment ${errorNameMasterCard ? "error" : ""}`}
    onBlur={handleNameBlurMasterCard}
  />
             </div>


             <div className='container_input_payment'>

  <p className='text_payment'>
    Expiration {errorExpirationMasterCard && <span style={{color: '#ff6060'}}>(an error was made)</span>}
  </p>

  <input
    type="text"
    className={`input_payment2 ${errorExpirationMasterCard ? "error" : ""}`}
    onBlur={handleExpirationBlurMasterCard}
  />
              
             </div>

              <div className='container_input_payment'>


  <p className='text_payment'>
    CVV {errorCVVMasterCard && <span style={{color: '#ff6060'}}>(an error was made)</span>}
  </p>

  <input
    type="text"
    className={`input_payment2 ${errorCVVMasterCard ? "error" : ""}`}
    onBlur={handleCVVBlurMasterCard}
  />
             </div>

             </div>

             <div className='agreement'>
                        <img style={{cursor: 'pointer'}}
  src={opencheckmastercard ? "/square_input_active.png" : "/square_input_2.png"}
  onClick={() => setOpenCheckMasterCard(!opencheckmastercard)}
/>
<p className='text_payment'>Save this payment method for future purchase?</p>
              </div>
              <p className='description_payment'>By choosing to save your payment information, this payment method will be selected as the default for all purchases made using Epic Games payment, including purchases in Fortnite, Rocket League, Fall Guys and the Epic Games Store. You can delete your saved payment information anytime on this payment screen or by logging in to your Epic Games account, and selecting payment management in your account settings</p>
        </div>
        }
        </div>

        </div>

          <div className='order_summary_container'>
          <p className='text_payment_information'>ORDER SUMMARY</p>
          <RxCross2 className='cross' onClick={close} />
          </div>
          <div className='product'>
            <img src='./eos.png' alt='eos'/>
            <div className='product_information'>
            <p className='text_product'>The End of the Sun</p>
            <p className='text_product2'>ZA/UM</p>
            <p className='text_product2'>UAH 390.00</p>
            </div>
          </div>
          <div className='price'>
            <div className='price_container'>
              <p className='price_text'>Price</p>
              <p className='price_text'>Taxed(5%)</p>
            </div>
                     <div className='price_container'>
              <p className='price_text'>UAH 390.00</p>
              <p className='price_text' style={{ marginLeft: '9px' }}>UAH 19.50</p>
            </div>
          </div>
                      <div className='line'></div>

                      <div className='price_container2'>
                        <p className='price2_text'>Taxed(5%)</p>
                        <p className='price2_text'>UAH 19.50</p>
                      </div>

                      <div className='agreement2'>
                                                <img style={{cursor: 'pointer'}}
  src={opencheckorder ? "/square_input_2.png" : "/square_input_active2.png"}
  onClick={() => setOpenCheckOrder(!opencheckorder)}
/>
                        <p> I am 13 years of age or older and agree to the terms of the Steam Subscriber Agreement and the Valve Privacy Policy.</p>
                      </div>

                       <div className='line2'></div>
                       
                       <p className='text_description_agreement2'>
                        You are purchasing a digital license for this product. For full terms, see <u>purchase policy.</u>
                        <br></br>
                        <br></br>
                        By clicking "Place Order" below, I represent that I am over 18 and an authorized user of this payment method, I agree to the <u>End User License Agreement</u>.
                       </p>

                           <button className='order_button' onClick={() => setСompletionoOfPurchase(!opencompletionofpurchase)}>
      <h3>PLACE ORDER</h3>

    </button>
                       
        </div>
      </div>
      {opencompletionofpurchase &&
      <div onAnimationStart={close} id='container_payment2' >
        <div className='completionofpurchase'>
        <img src='./_Ð¡Ð»Ð¾Ð¹_1.png' alt='logo'/>
        <h2>Thank you for buying our games!</h2>
        <p>An email receipt has been sent to you.</p>
        <p>If there is anything else you need, feel free to browse our shop! </p>
      </div>
      </div>
      }
    </div>

  
  );

}

export default PaymentWindow;

