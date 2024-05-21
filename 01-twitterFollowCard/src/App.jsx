import './App.css'
import { TwitterFollowcard } from './TwitterFollowCard'

const users = [
  {
    userName: "vmendozaespina", 
    name: "Victor Mendoza",
    isFollowing: true,
  },
  {
    userName: "midudev", 
    name: "Miguel Angel Duran",
    isFollowing: false,
  },
  {
    userName: "mendozalz", 
    name: "Lenin Mendoza", 
    isFollowing: true,
  },
  {
    userName: "apmendozapimentel", 
    name: "Anais Mendoza",
    isFollowing: false,
  },
]

export function App () {

  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
            <TwitterFollowcard
              key={userName}
              userName={userName}
              name={name}
              initialIsFollowing={isFollowing}
            >
            </TwitterFollowcard>
          ))
      }
    </section>
  )
}