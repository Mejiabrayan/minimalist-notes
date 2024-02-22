import {
  ActionButtonsRow,
  Content,
  DraggableTopBar,
  FloatingNoteTitle,
  MarkdownEditor,
  NotePreviewList,
  RootLayout,
  Sidebar,
  Wallpaper
} from '@/components'
import { useRef } from 'react'

const App = () => {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2 bg-[#1D1E22]">
          <ActionButtonsRow className="flex justify-start" />
          <NotePreviewList className="mt-3" onSelect={resetScroll} />
        </Sidebar>
        <Content
          ref={contentContainerRef}
          className="border-l border-l-white/10 mt-16 overflow-y-scroll h-screen"
        >
          <FloatingNoteTitle />
          <MarkdownEditor />
        </Content>
        <Wallpaper />
      </RootLayout>
    </>
  )
}

export default App
