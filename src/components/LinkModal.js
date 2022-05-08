import { useState } from 'react';
import Modal from 'react-modal';
import isURL from 'validator/es/lib/isURL';

const LinkModal = ({ major, saveLink, handleUrl }) => {
  Modal.setAppElement('#root');
  const add = useState(!handleUrl.url);
  const [error, setError] = useState(false);

  let btnStyle = 'rounded-lg py-2 text-sm transition-all duration-100';
  let focusStyle = 'focus:outline-none border-b';
  let baseBtnStyle = 'focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 focus-visible:ring-offset-0';
  switch (major) {
    case 'cs':
      btnStyle += ' bg-cs/20 hover:bg-cs/30 active:bg-cs/40';
      focusStyle += ' focus-visible:border-cs';
      baseBtnStyle += ' focus-visible:ring-cs';
      break;
    default:
      btnStyle += ' bg-default/20 hover:bg-default/30 active:bg-default/40';
      focusStyle += ' focus-visible:border-default';
      baseBtnStyle += ' focus-visible:ring-default';
      break;
  }

  const handleSave = isURL(handleUrl.url, { protocols: ['https'] }) || !handleUrl.url
    ? () => { setError(false); saveLink(); }
    : () => setError(true);

  const overlayStyle = {
    base: 'modal-bg',
    afterOpen: 'modal-bg--after-open',
    beforeClose: 'modal-bg--before-close',
  };

  return (
    <Modal
      className="modal-content"
      overlayClassName={overlayStyle}
      isOpen={handleUrl.showModal}
      onRequestClose={handleUrl.closeModal}
      closeTimeoutMS={120}
    >
      <form onSubmit={(e) => {
        e.stopPropagation();
        e.preventDefault();
        handleSave();
      }}
      >
        <h2>
          {add[0] ? 'Add Link' : 'Edit Link'}
        </h2>
        <input
          className={`${focusStyle} w-full border-b focus:outline-none`}
          type="text"
          onChange={(e) => handleUrl.setUrl(e.target.value)}
          value={handleUrl.url}
          autoFocus
        />
        {error && (
          <p className="text-red mt-1 text-sm"> Invalid link. </p>
        )}
        <button
          onClick={handleSave}
          className={`${baseBtnStyle} ${btnStyle} w-full mt-3`}
          type="button"
        >
          Save
        </button>
      </form>
    </Modal>
  );
};

export default LinkModal;
