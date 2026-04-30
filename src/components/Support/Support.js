import './Support.css';
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


export function Support () {

const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    { question: "Game problems", answer: "If you are contacted by Epic Games support, the email will come from the domain @support.epicgames.com, help@acct.epicgames.com or help@accts.epicgames.com emails. Any email with a different domain claiming to be Epic Games Support is not Epic Games Support."},
    { question: "Refund", answer: "You can request a refund for nearly any purchase on Steam—for any reason. Maybe your PC doesn’t meet the hardware requirements; maybe you bought a game by mistake; maybe you played the title for an hour and just didn’t like it. It doesn’t matter. Valve will, upon request via help.steampowered.com, issue a refund for any title that is requested within 14 days of purchase and has been played for less than 2 hours. Even if you fall outside of the refund rules we’ve described, you can still submit a request and we’ll take a look at it." },
    { question: "My account", answer: "Your Steam account is your access to the Steam service and your game library. If you are having trouble accessing your account, or if you have questions about account security, recovery, or changes, you can find help here. We strongly recommend that you do not share your account details with anyone. If you think your account has been compromised, please contact Steam Support immediately." },
    { question: "Client", answer: "The Steam Client is the application that allows you to access your Steam account and play your games. If you're experiencing issues with the Steam Client, such as crashes, download problems, or performance issues, you can find troubleshooting steps here. Common issues include connection problems, slow downloads, or the client not launching properly." },
    { question: "Community problems", answer: "The Steam Community includes features such as profiles, friends list, groups, discussions, and the Steam Workshop. If you're experiencing issues with the Steam Community, such as being unable to post, comment, or access certain features, you can find help here. Some features may be restricted due to account limitations or community bans." },
    { question: "Device problems", answer: "Steam supports a variety of devices including PCs, Steam Deck, controllers, and VR hardware. If you're experiencing issues with your device—such as it not being detected, not working properly, or having compatibility problems—you can find help here. This includes troubleshooting steps for controllers, Steam Deck, VR devices, and other hardware used with Steam." },
    { question: "Gifts", answer: "Gifts are games or items purchased on Steam and sent to another user. If you are having trouble sending, receiving, or redeeming a gift, you can find help here. Unredeemed gifts may be eligible for a refund within 14 days of purchase. Once a gift has been redeemed, it may no longer be eligible for a refund." },
    { question: "Frequent questions", answer: "It is currently under development" }
  ];

function Click(index) {
  setOpenIndex(openIndex === index ? null : index);
}



    return <div className="support">

      <div id='container_support1'>
    <h1>Support</h1>


    <div className='support_search'>
       <FaSearch className="support-search-icon" />
      <input type='text' placeholder='Find help'/>
    </div>

    </div>


<div className="faq">
  {faqData.map((item, index) => (
    <div key={index} className="faq-item">

      <div className="faq-question" onClick={() => Click(index)}>
        <span>{item.question}</span>

        <IoIosArrowDown
          className={`arrow ${openIndex === index ? "open" : ""}`}
        />
      </div>

      <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
        {item.answer}
      </div>

    </div>
  ))}
</div>


    <div id='container_support3'>
      <div className='previous'>
        <img src='./tabler-icon-chevron-left.png' alt='arrow'/>
        <p>Previous</p>
      </div>

      <div className='numbers'>
        <p style={{color: '#7BC74D'}}>1</p>
      </div>

      <div className='next'>
        <p>Next</p>
        <img src='./tabler-icon-chevron-right.png' alt='arrow'/>
      </div>
    </div>

    <div id='container_support4'>

    <h1>Have any other questions?</h1>



    <button className='support_button'>
      <h3>Contact us on our email!</h3>
    </button>

    
    </div>


  </div>


}

export default Support;
