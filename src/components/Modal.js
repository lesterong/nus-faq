import FocusLock from 'react-focus-lock';

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
          If you would like to contribute to the questions, I'm working on it. For the time being,
          drop me a message at <a href="https://forms.gle/ivY3YVdxd3x2Zdqq6" rel="noopener nofollow noreferrer" target="_blank"> the same link</a>. 
        </p>
        <p className="mt-6"> <small> Last updated: 5 May 2022 </small> </p>
      </div>
    </div>
    </FocusLock>
  )
}

export default Modal;