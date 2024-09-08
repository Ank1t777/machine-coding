export default Modal = ({ handleAcceptOffer, handleCloseBtn }) => {
  return (
    <div className="modal--box">
      <div className="modal--content">
        <button className="close--btn" onClick={handleCloseBtn}>
          x
        </button>

        <p className="content">
          click the button below to <br />
          accept our amazing offer!
        </p>
        <button onClick={handleAcceptOffer} className="accept--offer">
          Accept offer
        </button>
      </div>
    </div>
  );
};
