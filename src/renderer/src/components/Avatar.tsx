import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import avatarImage from '../assets/gradient.jpeg' // replace with the path to your avatar image

export const Avatar = ({ className, ...props }: ComponentProps<'img'>) => {
  return (
    <img
      src={avatarImage}
      alt="avatar"
      className={twMerge('border w-10 h-10 rounded-full', className)}
      {...props}
    />
  )
}
