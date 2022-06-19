import * as React from "react"
import AvatarIcon from "../AvatarIcon/AvatarIcon"
import { useState } from "react"

export default function TweetInput({value, handleOnChange}) {
  const [newClass, setNewClass] = useState("")
  const handleOnFocus = () => {
    setNewClass("expanded")
    console.log('here')
  }
  const handleOnBlur = () => {
    if (value.length == 0){
      setNewClass("")
    }
  }
  return (
    <div className="tweet-textarea">
      <AvatarIcon />

      <textarea className={newClass} onFocus={handleOnFocus} onBlur={handleOnBlur} name="new-tweet-input" type="text" placeholder="What's Happening?" value={value} onChange={handleOnChange}></textarea>

      {newClass === "expanded" ? <SmileIcon /> : <ImageIcon />}
    </div>
  )
}

export const SmileIcon = () => <i className="fas fa-smile"></i>
export const ImageIcon = () => <i className="fas fa-image"></i>
