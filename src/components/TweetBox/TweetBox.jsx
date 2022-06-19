import * as React from "react"
import TweetInput from "./TweetInput"
import { useState } from "react"
import "./TweetBox.css"

export default function TweetBox({tweets, setTweets, userProfile, tweetText, setTweetText}) {
  const [disabled, setDisabled] = useState(true)
  const handleOnTweetTextChange = (event) => {
    setTweetText(event.target.value)
    const length = event.target.value.length
    console.log(length)
    if (length <= 0 || length > 140){
      setDisabled(true)
    }
    else {
      setDisabled(false)
    }
  }
  
  const handleOnSubmit = () => {
    let newTweet = {
      id: tweets.length,
      name: userProfile.name,
      handle: userProfile.handle,
      text: tweetText,
      comments: 0,
      retweets: 0,
      likes: 0
    }
    setTweets([...tweets, newTweet])
    setTweetText("")
    setDisabled(true)
  }
  return (
    <div className="tweet-box">
      <TweetInput value={tweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        
        <TweetCharacterCount tweetLength={tweetText.length}/>
        <TweetSubmitButton disabled={disabled} handleOnSubmit={handleOnSubmit}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount({tweetLength}) {
  // ADD CODE HERE
  let newClass = "tweet-length"
  if (140 - tweetLength < 0){
    newClass = "tweet-length red"
  } else {
    newClass = "tweet-length"
  }
  return <span className={newClass}>{140 - tweetLength}</span>
}

export function TweetSubmitButton({handleOnSubmit, disabled}) {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" disabled={disabled} onClick={handleOnSubmit}>Tweet</button>
    </div>
  )
}
