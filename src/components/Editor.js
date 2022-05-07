import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import { useCallback, useState } from 'react'
import * as Icons from "../assets/EditorIcons";
import LinkModal from './LinkModal';

const MenuBar = ({ editor, handleUrl, major }) => {
  const openModal = useCallback(() => {
    handleUrl.setUrl(editor.getAttributes("link").href)
    handleUrl.openModal()
  }, [editor, handleUrl])
  
  const toggleBulletList = useCallback(() => {
    editor.chain().focus().toggleBulletList().run()
  }, [editor])

  const toggleStrike = useCallback(() => {
    editor.chain().focus().toggleStrike().run();
  }, [editor])

  const removeLink = useCallback(() => {
    editor.chain().focus().extendMarkRange("link").unsetLink().run();
    handleUrl.setUrl('')
  }, [editor, handleUrl])

  const saveLink = useCallback(() => {
    if (handleUrl.url) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: handleUrl.url, target: "_blank" })
        .run();
    } else {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
    }
    handleUrl.setUrl('')
    handleUrl.closeModal()
  }, [editor, handleUrl])

  if (!editor) {
    return null
  }

  return (
    <>
    <div className='flex justify-between'>
      Answer
      <div className='flex space-x-2 place-items-start shrink-0'>
          <button 
            onClick={() => editor.chain().focus().undo().run()}
            type='button'
            disabled={!editor.can().undo()}
          >
            <Icons.Undo />
          </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          type='button'
          disabled={!editor.can().redo()}
        >
          <Icons.Redo />
        </button>
        <button
          onClick={toggleBulletList}
          className={editor.isActive('bulletList') ? 'active-menu-btn' : ''}
          type='button'
        >
          <Icons.List />
        </button>
        <button
          onClick={toggleStrike}
          className={editor.isActive('strike') ? 'active-menu-btn' : ''}
          type='button'
        >
          <Icons.StrikeThrough />
        </button>
        <button 
          onClick={openModal}
          className={editor.isActive('link') ? 'active-menu-btn' : ''}
          type='button'
        >
          <Icons.Link />
        </button>
        <div className="w-6 h-6 flex flex-col">
          <button
            onClick={removeLink}
            disabled={!editor.isActive('link')}
            type='button'
          >
            <Icons.Unlink />
          </button>
          {handleUrl.showModal &&
            <LinkModal major={major} saveLink={saveLink} handleUrl={handleUrl} />
          }
        </div>
      </div>
    </div>
    </>
  )
}

const Editor = ({updateAns, major}) => {
  const [url, setUrl] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleUrl = {
    url: url,
    setUrl: (link) => setUrl(link),
    showModal: showModal,
    closeModal: () => setShowModal(false),
    openModal: () => setShowModal(true)
  }

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: `border-b focus:outline-none focus-visible:border-b focus-visible:border-${major}`,
      },
    },
    extensions: [
      Link.configure({
        HTMLAttributes: {
          class: `text-${major} underline`,
        },
        openOnClick: false,
        autolink: false,
      }),
      StarterKit.configure({
        heading: false,
        bold: false,
        italic: false,
        blockquote: false,
        codeBlock: false,
        hardBreak: false,
        horizontalRule: false,
        orderedList: false,
      }),
    ],
    content: '',
    onUpdate: ({ editor }) => {
      const html = editor.getHTML()
      updateAns(html)
    },
  })

  return (
    <>
    <MenuBar editor={editor} handleUrl={handleUrl} major={major} />
    <EditorContent editor={editor} />
    </>
  )
}

export default Editor;