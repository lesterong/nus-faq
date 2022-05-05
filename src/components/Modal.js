import FocusLock from 'react-focus-lock';
import { Link } from 'react-router-dom';

const Modal = ({setShowModal}) => {
  return (
    <FocusLock>
    <div className="modal-bg" onClick={setShowModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2> About this site </h2>
        <p className="mt-3"> 
          I kept seeing the same questions about CS appear again, and again on various subreddits like
          r/NUS and r/SGExams, so I made this site to collate the questions.
        </p>
        <p className="mt-1">
          If you have any general feedback (good or bad), feel free to drop me a message <a href="https://forms.gle/ivY3YVdxd3x2Zdqq6" rel="noopener nofollow noreferrer" target="_blank"> here</a>.
        </p>
        <p className="mt-1">
          If you would like to contribute to the questions, you can now submit on the <Link to="../contribute"><button onClick={setShowModal}> Contribute</button></Link> page.
        </p>
      </div>
    </div>
    </FocusLock>
  )
}

export default Modal;