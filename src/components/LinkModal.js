import { useState } from "react";
import FocusLock from "react-focus-lock";

const LinkModal = ({major, saveLink, handleUrl}) => {
  const add = useState(!handleUrl.url)
  const [error, setError] = useState(false)

  let btnStyle = "rounded-lg py-2 text-sm transition-all duration-100";
  let focusStyle = "focus:outline-none border-b";
  let baseBtnStyle = "focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 focus-visible:ring-offset-0"
  switch (major) {
    case 'cs':
      btnStyle += " bg-cs/20 hover:bg-cs/30 active:bg-cs/40"
      focusStyle += " focus-visible:border-cs"
      baseBtnStyle += " focus-visible:ring-cs"
      break;
    default:
      break;
  }

  const regex = new RegExp('(https://(?:www.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|www.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9].[^s]{2,}|https://(?:www.|(?!www))[a-zA-Z0-9]+.[^s]{2,}|www.[a-zA-Z0-9]+.[^s]{2,})')
  const handleSave = regex.test(handleUrl.url)
    ? () => {setError(false); saveLink();}
    : () => setError(true)

  return (
    <FocusLock>
      <div className="modal-bg" onClick={handleUrl.closeModal}> 
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <h2> {add[0] ? 'Add' : 'Edit'} Link </h2>
          <input
            className={`${focusStyle} w-full border-b focus:outline-none`}
            type="text"
            onChange={e => handleUrl.setUrl(e.target.value)}
            value={handleUrl.url || ""}
          />
          {error && <p className="text-red mt-1"> Invalid link. Links must begin with <code>www</code> or <code>https</code>.</p>}
          <button
            onClick={handleSave}
            className={`${baseBtnStyle} ${btnStyle} w-full mt-3`}
            type="button"
          > 
            Save 
          </button>
        </div>
      </div>
    </FocusLock>
  )
}

export default LinkModal