import { useState } from 'react';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';
import isURL from 'validator/es/lib/isURL';
import styleScheme from '../utils/styleScheme';

const LinkModal = ({ saveLink, handleUrl }) => {
  Modal.setAppElement('#root');
  const add = useState(!handleUrl.url);
  const [error, setError] = useState(false);
  let { major } = useParams();
  const { textInputStyle, btnPrimaryStyle } = styleScheme[major] || styleScheme.home;

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
      onRequestClose={() => {
        handleUrl.closeModal();
        setError(false);
      }}
      closeTimeoutMS={150}
      htmlOpenClassName="overflow-hidden"
      shouldReturnFocusAfterClose={false}
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
          className={`${textInputStyle} w-full border-b focus:outline-none`}
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
          className={`${btnPrimaryStyle} w-full mt-3`}
          type="button"
        >
          Save
        </button>
      </form>
    </Modal>
  );
};

export default LinkModal;
