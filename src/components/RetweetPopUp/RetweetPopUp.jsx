import React from 'react'
import "./RetweetPopUp.css"

export const RetweetPopUp = ({openRetweetPopUp, setOpenRetweetPopUp, retweet, setRetweet}) => {
  const handleOnClick = () => {
    setOpenRetweetPopUp(false)
    setRetweet(retweet + 1)
  }
  return (
    <div className="modal-container">
        <div className="overlay" onClick={() => setOpenRetweetPopUp(false)}></div>
        <button onClick={handleOnClick}>Retweet</button>
    </div>
  )
}
