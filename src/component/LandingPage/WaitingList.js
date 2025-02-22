import React, { useState } from 'react';
import background from '../../images/background.jpg';
import './Testimonial.css';

const WaitingListSection = () => {
  const [showIframe, setShowIframe] = useState(false);

  const handleSignUpClick = () => {
    setShowIframe(true);
  };

  const handleClose = () => {
    setShowIframe(false);
  };

  return (
    <section className="waiting-list-section">
      <div 
        className="background-container"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        />
      </div>
      <div className="content-wrapper">
        <h2>Join the Waiting List</h2>
     
        <button className="signup-button" onClick={handleSignUpClick}>
          Sign Up Now
        </button>
      </div>

      {showIframe && (
        <div className="iframe-overlay">
          <div className="iframe-container">
            <button className="close-button" onClick={handleClose}>×</button>
            <iframe
              src="https://share.synamate.com/widget/form/PzpVc391cMxwteQOQ36n"
              style={{ width: "100%", height: "556px", border: "none", borderRadius: "3px" }}
              id="popup-PzpVc391cMxwteQOQ36n"
              data-layout='{"id":"POPUP"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="IPU Sign up Form"
              data-height="556"
              data-layout-iframe-id="popup-PzpVc391cMxwteQOQ36n"
              data-form-id="PzpVc391cMxwteQOQ36n"
              title="IPU Sign up Form"
            />
          </div>
        </div>
      )}

      {/* Keep the script directly in the JSX, so it loads properly */}
      <script src="https://share.synamate.com/js/form_embed.js"></script>
    </section>
  );
};

export default WaitingListSection;
