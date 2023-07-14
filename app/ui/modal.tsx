'use client'

import React, { useCallback, useEffect, useRef, MouseEventHandler } from 'react'
import { useRouter } from 'next/navigation'

type Props = {
  children?: React.ReactNode
}

const Modal = (props: Props) => {
  const overlay = useRef(null)
  const wrapper = useRef(null)
  const router = useRouter()

  const onDismiss = useCallback(() => {
    router.back()
  }, [router])

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss()
      }
    },
    [onDismiss, overlay, wrapper],
  )

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onDismiss()
    },
    [onDismiss],
  )

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/40"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-10/12 md:w-8/12 lg:w-1/2 px-6 max-h-full min-h-fit pt-2 pb-6 rounded-lg bg-white shadow-lg"
      >
        <button
          className="absolute -top-1 right-2 text-4xl text-slate-600 hover:text-slate-800"
          onClick={onDismiss}
        >
          &times;
        </button>
        {props.children}
      </div>
    </div>
  )
}

export default Modal
