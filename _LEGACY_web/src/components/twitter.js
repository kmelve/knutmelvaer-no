import React from 'react'
import css from './twitter.module.css'

function Twitter ({twitterUrl}) {
  const twitterId = twitterUrl.match(/.*status\/(.*)$/)[1]
  return (<ul className={css.root}>
    <li>
      <a
        href={`https://twitter.com/intent/tweet?in_reply_to=${twitterId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Reply
      </a>
    </li>
    <li>
      <a
        href={`https://twitter.com/intent/retweet?tweet_id=${twitterId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Repost
      </a>
    </li>
    <li>
      <a
        href={`https://twitter.com/intent/favorite?tweet_id=${twitterId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Like
      </a>
    </li>
  </ul>)
}

export default Twitter
