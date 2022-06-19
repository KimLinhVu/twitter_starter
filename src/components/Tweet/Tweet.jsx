import * as React from "react"
import AvatarIcon from "../AvatarIcon/AvatarIcon"
import { formatLikes } from "../../utils/format"
import { useState } from "react"
import { RetweetPopUp } from "../RetweetPopUp/RetweetPopUp"
import "./Tweet.css"

export default function Tweet({ tweet }) {
  return (
    <div className="tweet" data-tweet-id={tweet.id}>
      <div className="tweet-avatar">
        <AvatarIcon />
      </div>

      <div className="tweet-content">
        <TweetUserInfo name={tweet.name} handle={tweet.handle}/>
        {/* {<p className="tweet-text">{tweet.text}</p>} */}
        <p className="tweet-text">{tweet.text.split(' ').map((word, idx) => (
          word.startsWith("#") == true ? <span className="blue" key={idx}>{word} </span> : <span key={idx}>{word} </span>
        ))}</p>
        <TweetFooter numComments={tweet.comments} numRetweets={tweet.retweets} numLikes={tweet.likes}/>
      </div>
    </div>
  )
}

export function TweetUserInfo({ name, handle }) {
  return (
    <div className="tweet-user-info">
      <div className="meta">
        <p className="name">{name}</p>
        <span className="handle">@{handle}</span>
        <span className="dot">•</span>
        <span className="ts">1 min</span>
      </div>
      <i className="fa fa-angle-down" ></i>
    </div>
  )
}

export function TweetFooter({ numComments, numRetweets, numLikes }) {
  const [likes, setLikes] = useState(numLikes)
  const [retweet, setRetweet] = useState(numRetweets)
  const [openRetweetPopUp, setOpenRetweetPopUp] = useState(false)
  const handleOnClickLike = () => {
    setLikes(likes + 1)
  }
  const handleOnClickRetweet = () => {
    setOpenRetweetPopUp(true)
  }
  return (
    <div className="tweet-footer">
      <span>
        <i className="fa fa-comment"></i>
        {numComments || 0}
      </span>
      <span>
        <i className="fa fa-retweet" onClick={handleOnClickRetweet}></i>
        {retweet || 0}
        {openRetweetPopUp && <RetweetPopUp openRetweetPopUp={openRetweetPopUp} setOpenRetweetPopUp={setOpenRetweetPopUp} retweet={retweet} setRetweet={setRetweet}/>}
      </span>
      <span>
        <i className="fas fa-heart" onClick={handleOnClickLike}></i>
        {formatLikes(likes ?? 0)}
      </span>
      <span>
        <i className="fa fa-envelope"></i>
      </span>
    </div>
  )
}
