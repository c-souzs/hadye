import classNames from 'classnames';
import React, { ReactNode } from 'react'

type ContainerProps = {
    children: ReactNode;
    mostStyles?: string;
}

const Container = ({ children, mostStyles }: ContainerProps) => {
  return (
    <div className={classNames('max-w-[1128px] h-full mx-auto px-4 sm:px-6', mostStyles)}>
        {children}
    </div>
  )
}

export default Container