import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo";
import Info from "../assets/Info";
import { useState } from "react";
import Modal from "./Modal";

const Home = ({notFound = false}) => {
  const [showModal, setShowModal] = useState(false)
  let navigate = useNavigate();
  return (
    <>
    {showModal && <Modal setShowModal={() => setShowModal(false)}/>}
    <nav> 
      <button
        onClick={() => navigate('/')}
        className="focus-white flex space-x-2"
        aria-label="Logo"
      >
        <Logo major='nus'/>
        <h1><b> NUS </b> FAQ</h1>
      </button>
      <button
        className="focus-white"
        aria-label="About this site"
        onClick={() => setShowModal(true)}
      >
        <Info />
      </button>
    </nav>

    <div className="flex flex-col">
      {notFound && 
      <div className="max-w-md mx-auto">
      <h1 className="text-black my-3 md:px-0 px-3 text-center">
        The FAQ for this major is not available.
      </h1>
      <p className="md:px-0 px-3 font-normal">
        Select one of the majors below to explore, or make a request using the feedback form&nbsp;
        <a href="https://forms.gle/ivY3YVdxd3x2Zdqq6" rel="noopener nofollow noreferrer" target="_blank">here</a>.
      </p>
      </div>
      }
      <h2 className="my-3 mx-auto text-center"> 
        {!notFound && 'Select a major to explore!'}
      </h2>
      <button className="major-btn" onClick={() => navigate('/cs/prospective')}> Computer Science </button>
    </div>
    </>
  )
}

export default Home;