import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import Gradient from '../assets/gradient.jpeg'
import { Avatar } from './Avatar'

export const RootLayout = ({ children, className, ...props }: ComponentProps<'main'>) => {
  return (
    <main className={twMerge('grid grid-cols-12 gap-1  bg-[#1D1E22]', className)} {...props}>
      {children}
    </main>
  )
}
export const Sidebar = ({ className, children, ...props }: ComponentProps<'aside'>) => {
  return (
    <aside className={twMerge('col-span-2', className)} {...props}>
      {children}
    </aside>
  )
}

export const Wallpaper = ({ className, children, ...props }: ComponentProps<'div'>) => {
  return (
    <div
      className={twMerge('bg-cover bg-center opacity-60 col-span-4', className)}
      style={{ backgroundImage: `url(${Gradient})` }}
      {...props}
    >
      {children}
    </div>
  )
}

export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, className, ...props }, ref) => (
    <div ref={ref} className={twMerge('col-span-6 p-3', className)} {...props}>
      {children}
    </div>
  )
)

Content.displayName = 'Content'
