import React from 'react'
import cn from 'classnames';

interface TitleProps {
    title: string;
    light?: boolean;
}

const Title = ({ title, light }: TitleProps) => {
  return (
    <h1 className={cn(
        "mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl w-full flex items-center justify-center",
        {'text-white': light}
    )}>{title}</h1>

  )
}

export default Title