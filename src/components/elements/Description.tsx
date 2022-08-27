import React from 'react'

import classNames from 'classnames';

type DescriptionProps = {
    text: string;
    mostStyles?: string;
}

const Description = ({text, mostStyles}: DescriptionProps) => {
  return (
    <p className={classNames('text-gray-400 dark:text-gray-500 text-xl text-center max-w-[620px] mx-auto', mostStyles)}>{text}</p>
  )
}

export default Description