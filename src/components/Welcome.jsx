import React, { useState, useEffect } from "react";

const WelcomeMessage = ({ onTimerEnd }) => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
      onTimerEnd();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onTimerEnd]);

  return (
    <div>
      {showMessage && (
        <>
          <h1 className="title-msg">
            Bienvenido a mi <strong>invitación</strong>
          </h1>
          <br />
          <h3 className="text-msg">
            Si estas leyendo esto, es porque estas invitado <br />
            <strong>¡Vos y tu hermana!</strong>
          </h3>
          <br />
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WelcomeMessage;
