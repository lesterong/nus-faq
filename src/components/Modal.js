import FocusLock from 'react-focus-lock';
import { Link, useParams } from 'react-router-dom';

const Modal = ({setShowModal}) => {
  let params = useParams();
  const major = params.major;
  let linkStyle;
  switch (major) {
    case 'cs':
      linkStyle = 'text-cs'
      break;
    default:
      break;
  }

  return (
    <FocusLock>
    <div className="absolute bg-black/40 w-screen h-screen flex z-20" onClick={setShowModal}>
      <div 
        className="bg-white md:w-[30rem] w-screen h-max p-4 my-auto md:mx-auto rounded-md shadow-sm mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2> About this site </h2>
        <p className="mt-3"> 
          I kept seeing the same questions about Computer Science (CS) appear again, and again on various subreddits like
          r/NUS and r/SGExams, so I made this site to collate the questions.
        </p>
        <p className="mt-1">
          If you have any general feedback (good or bad), feel free to drop me a message on&nbsp;
          <a className={linkStyle} href="https://forms.gle/ivY3YVdxd3x2Zdqq6" rel="noopener nofollow noreferrer" target="_blank">this form</a>.
        </p>
        <p className="mt-1">
          {major ?
            <>
            If you would like to contribute, you can submit your questions on the&nbsp;
            <Link className={linkStyle} onClick={setShowModal} to={`../${major}/contribute`}>Contribute</Link> page.
            </> :
            <>
            Currently, only contributing to the CS FAQ is supported, and you can do that&nbsp;
            <Link className={linkStyle} onClick={setShowModal} to={`../cs/contribute`}>here</Link>.
            As I work on including more majors on the site, you can submit any questions via the&nbsp;
            <a className={linkStyle} href="https://forms.gle/ivY3YVdxd3x2Zdqq6" rel="noopener nofollow noreferrer" target="_blank">feedback form</a>.
            </>}
        </p>

      </div>
    </div>
    </FocusLock>
  )
}

export default Modal;