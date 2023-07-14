'use client'

import React from 'react'

type Props = {
  className?: string
  onClick?: () => void
  children?: React.ReactNode
}

const Button = (props: Props) => {
  return (
    <button
      className={
        'bg-white border border-slate-500 shadow rounded-md py-1.5 px-4 ' +
        props.className
      }
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default Button
