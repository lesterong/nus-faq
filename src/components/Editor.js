import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import * as Icons from '../assets/EditorIcons';
import LinkModal from './LinkModal';

const MenuBar = ({ editor, handleUrl }) => {
  const openModal = useCallback(() => {
    handleUrl.setUrl(editor.getAttributes('link').href || '');
    handleUrl.openModal();
  }, [editor, handleUrl]);

  const toggleBulletList = useCallback(() => {
    editor.chain().focus().toggleBulletList().run();
  }, [editor]);

  const toggleStrike = useCallback(() => {
    editor.chain().focus().toggleStrike().run();
  }, [editor]);

  const removeLink = useCallback(() => {
    editor.chain().focus().extendMarkRange('link').unsetLink()
      .run();
    handleUrl.setUrl('');
  }, [editor, handleUrl]);

  if (!editor) {
    return null;
  }

  return (
    <div className="flex justify-between">
      Answer
      <div className="editor-menu flex space-x-2 place-items-start shrink-0">
        <Tippy content="Undo" arrow={false} placement="bottom">
          <button
            onClick={() => editor.chain().focus().undo().run()}
            type="button"
            disabled={!editor.can().undo()}
          >
            <Icons.Undo />
          </button>
        </Tippy>
        <Tippy content="Redo" arrow={false} placement="bottom">
          <button
            onClick={() => editor.chain().focus().redo().run()}
            type="button"
            disabled={!editor.can().redo()}
          >
            <Icons.Redo />
          </button>
        </Tippy>
        <Tippy content="Bullet list" arrow={false} placement="bottom">
          <button
            onClick={toggleBulletList}
            className={editor.isActive('bulletList') ? 'active-menu-btn' : ''}
            type="button"
          >
            <Icons.List />
          </button>
        </Tippy>
        <Tippy content="Strikethrough" arrow={false} placement="bottom">
          <button
            onClick={toggleStrike}
            className={editor.isActive('strike') ? 'active-menu-btn' : ''}
            type="button"
          >
            <Icons.StrikeThrough />
          </button>
        </Tippy>
        <Tippy content="Add link" arrow={false} placement="bottom">
          <button
            onClick={openModal}
            className={editor.isActive('link') ? 'active-menu-btn' : ''}
            type="button"
          >
            <Icons.Link />
          </button>
        </Tippy>
        <Tippy content="Remove link" arrow={false} placement="bottom">
          <button
            onClick={removeLink}
            disabled={!editor.isActive('link')}
            type="button"
          >
            <Icons.Unlink />
          </button>
        </Tippy>
      </div>
    </div>
  );
};

const Editor = ({ updateAns }) => {
  const [url, setUrl] = useState('');
  const [showModal, setShowModal] = useState(false);
  let { major } = useParams();

  const handleUrl = {
    url,
    setUrl: (link) => setUrl(link),
    showModal,
    closeModal: () => setShowModal(false),
    openModal: () => setShowModal(true),
  };

  const editor = useEditor({
    editorProps: {
      attributes: {
        class: `border-b focus:outline-none focus-visible:border-${major || 'default'}`,
      },
    },
    extensions: [
      Link.configure({
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
    // eslint-disable-next-line no-shadow
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      updateAns(html);
    },
  });

  const saveLink = useCallback(() => {
    if (url) {
      if (url.includes('https')) {
        editor.chain().focus().extendMarkRange('link')
          .setLink({ href: url, target: '_blank' })
          .run();
      } else {
        editor.chain().focus().extendMarkRange('link')
          .setLink({ href: `https://${url}`, target: '_blank' })
          .run();
      }
    } else {
      editor.chain().focus().extendMarkRange('link').unsetLink()
        .run();
    }
    setUrl('');
    setShowModal(false);
  }, [editor, url]);

  return (
    <>
      <LinkModal saveLink={saveLink} handleUrl={handleUrl} />
      <div className={major && `${major}-content`}>
        <MenuBar editor={editor} handleUrl={handleUrl} />
        <EditorContent editor={editor} />
      </div>
    </>
  );
};

export default Editor;
