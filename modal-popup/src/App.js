import { useState } from "react";
import Modal from "./component/Modal";
import AcceptModal from "./component/AcceptModal";
import "./styles.css";

export default function App() {
  const [showOffer, setShowOffer] = useState(false);
  const [acceptOffer, setAcceptOffer] = useState(false);

  function handleOfferButton() {
    setShowOffer((prevState) => !prevState);
  }

  function handleCloseButton() {
    setShowOffer((prevState) => !prevState);
  }

  function handleAcceptOffer() {
    setAcceptOffer((prevState) => !prevState);
    setShowOffer((prevState) => !prevState);
  }

  return (
    <div>
      <div className="show--offer">
        {!acceptOffer ? (
          <button onClick={handleOfferButton} className="offer--btn">
            Show offer
          </button>
        ) : (
          <AcceptModal />
        )}
      </div>
      {showOffer && (
        <Modal
          handleAcceptOffer={handleAcceptOffer}
          handleCloseBtn={handleCloseButton}
        />
      )}
    </div>
  );
}
