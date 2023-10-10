import React from 'react'
import './MyComponent.scss'
import ButtonComponent from './ButtonComponent'

export default function MyComponent() {
  return (
    <div className="outer">
        <h1>My Styled Box</h1>
        <h4>This is a description of the box.</h4>
        <div className="button-group"><ButtonComponent /></div>
    </div>
  )
}
