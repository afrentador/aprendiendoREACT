import { useState } from "react";

export function TwitterFollowcard ({ userName, name, initialIsfollowing }) {
  const [isFollowing,setIsFollowing] = useState(initialIsfollowing)

  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassname = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return ( 
      <article className='tw-followCard'>
      <header className='tw-followCard-header'> 
        <img 
        className='tw-followCard-avatar'
        src= {`https://unavatar.io/${userName}`}
        alt="un extraño" />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>
      
      <aside>
        <button className={buttonClassname} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
        </button>
      </aside>
    </article>  
    )
}