import { MDXEditorMethods } from '@mdxeditor/editor'
import { saveNoteAtom, selectedNoteAtom } from '@renderer/store'
import { NoteContent } from '@shared/models'
import { useAtomValue, useSetAtom } from 'jotai'
import { useRef } from 'react'
import { throttle } from 'lodash'
import { autoSavingTime } from '@shared/constants'

export const useMarkdownEditor = () => {
  const selectedNote = useAtomValue(selectedNoteAtom)
  const saveNotes = useSetAtom(saveNoteAtom)
  const editorRef = useRef<MDXEditorMethods>(null)

  //  we need to throttle the auto save function to avoid saving the note every time we type a letter
  const handleAutoSaveNotes = throttle(
    async (content: NoteContent) => {
      if (!selectedNote) return

      console.info('Auto saving:', selectedNote.title)

      await saveNotes(content)
    },
    autoSavingTime,
    {
      leading: false,
      trailing: true
    }
  )

  const handleBlur = async () => {
    if (!selectedNote) return
    handleAutoSaveNotes.cancel()

    const content = editorRef.current?.getMarkdown()

    if (content != null) {
      await saveNotes(content)
    }
  }

  return {
    selectedNote,
    editorRef,
    handleAutoSaveNotes,
    handleBlur
  }
}
