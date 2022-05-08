import Modal from 'react-modal';
import { Link, useParams } from 'react-router-dom';

const AboutModal = ({ isOpen, onRequestClose }) => {
  Modal.setAppElement('#root');
  let { major } = useParams();
  let linkStyle;
  switch (major) {
    case 'cs':
      linkStyle = 'text-cs';
      break;
    default:
      break;
  }

  const overlayStyle = {
    base: 'modal-bg',
    afterOpen: 'modal-bg--after-open',
    beforeClose: 'modal-bg--before-close',
  };

  return (
    <Modal
      className="modal-content"
      overlayClassName={overlayStyle}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={120}
    >
      <h2> About this site </h2>
      <p className="mt-3">
        I kept seeing the same questions about Computer Science (CS) appear again,
        and again on various subreddits like r/NUS and r/SGExams, so I made this site
        to collate the questions.
      </p>
      <p className="mt-1">
        If you have any general feedback (good or bad), feel free to drop me a message on&nbsp;
        <a className={linkStyle} href="https://forms.gle/ivY3YVdxd3x2Zdqq6" rel="noopener nofollow noreferrer" target="_blank">this form</a>
        .
      </p>
      <p className="mt-1">
        {major ? (
          <>
            If you would like to contribute to the&nbsp;
            {major.toUpperCase()}
            &nbsp;FAQ, you can submit your questions&nbsp;
            <Link className={linkStyle} onClick={onRequestClose} to={`../${major}/contribute`}>here</Link>
            .
          </>
        ) : (
          <>
            You can now submit your questions and answers for all majors in NUS&nbsp;
            <Link className={linkStyle} onClick={onRequestClose} to="../contribute">here</Link>
            !
          </>
        )}
      </p>
    </Modal>
  );
};

export default AboutModal;
