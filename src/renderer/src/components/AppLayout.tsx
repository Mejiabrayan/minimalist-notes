import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import Gradient from '../assets/gradient.jpeg'

export const RootLayout = ({ children, className, ...props }: ComponentProps<'main'>) => {
  return (
    <main
      className={twMerge('grid grid-cols-3 min-h-screen gap-1 p-1 bg-[#1D1E22]', className)}
      {...props}
    >
      {children}
    </main>
  )
}
export const Sidebar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside className={twMerge('mt-4 ', className)} {...props}>
      {children}
    </aside>
  )
}

export const Wallpaper = ({ className, children, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      className={twMerge('bg-cover bg-center opacity-70 rounded', className)}
      style={{ backgroundImage: `url(${Gradient})` }}
      {...props}
    >
      {children}
    </div>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={twMerge('flex-1 h-screen col-span-1 overflow-y-scroll', className)}
      {...props}
    >
      {children}
    </div>
  )
)

Content.displayName = 'Content'
