import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin
} from '@mdxeditor/editor'
import { useMarkdownEditor } from '@renderer/hooks/useMarkdownEditor'

export const MarkdownEditor = () => {
  const { selectedNote, editorRef, handleAutoSaveNotes, handleBlur } = useMarkdownEditor()

  if (!selectedNote) return null
  return (
    <MDXEditor
      ref={editorRef}
      onBlur={handleBlur}
      key={selectedNote.title}
      markdown={selectedNote.content}
      onChange={handleAutoSaveNotes} // the problem with this apporach every time we type a letter the note will be saved; the way
      plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), markdownShortcutPlugin()]}
      contentEditableClassName="outline-none text-lg px-8 py-5 caret-yellow-500 prose prose-invert prose-p:my-3 prose-p:leading-relaxed prose-headings:my-4 prose-blockquote:my-4 prose-ul:my-2 prose-li:my-0 prose-code:px-1 prose-code:text-red-500 prose-code:before:content-[''] prose-code:after:content-['']"
    />
  )
}
