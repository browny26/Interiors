import React from 'react'

export const Button = ({text, size = "default"}) => {
    if (size === "small") {
        return (
            <button className="px-6 py-3 text-base text-sm w-fit bg-green-600 rounded-md">{text}</button>
        )
    }
  return (
    <button className="px-8 py-4 text-base w-fit bg-green-600 rounded-md">{text}</button>
  )
}