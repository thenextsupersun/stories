import React from 'react'

import classes from './index.module.css'

export default function Navigator ({ friends }) {
  return (
    <div className={classes['wrapper']}>
      <h2 className={classes['title']}>一些表面兄弟...</h2>
      {
        friends.map(friend =>
          <a href={friend.url} className={classes['column']}>
            <img alt='avatar' className={classes['avatar']} src={friend.avatar} />
            <div className={classes['info']}>
              <h3 className={classes['name']}>{friend.name}</h3>
              <span className={classes['description']}>{friend.description}</span>
            </div>
          </a>
        )
      }
    </div>
  )
}
