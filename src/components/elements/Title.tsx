import React from 'react'

import classNames from 'classnames';

type TitleProps = {
    text: string;
    mostStyles?: string;
}

const Title = ({ text, mostStyles }: TitleProps) => {
  return (
    <h2 className={classNames('text-zinc-200 dark:text-gray-100 text-3xl font-extrabold text-center mb-4 sm:text-4xl', mostStyles)}>
        {text}
    </h2>
  )
}

export default Title