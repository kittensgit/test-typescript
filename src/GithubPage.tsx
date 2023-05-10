import React, { useEffect, useState } from 'react'
import s from './Github.module.css'
import axios from 'axios'

type SearchUserType = {
  login: string
  id: number
}

type SearchResult = {
  items: SearchUserType[]
}

const GithubPage = () => {

  const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)
  const [users, setUsers] = useState<SearchUserType[]>([])

  useEffect(() => {
    if (selectedUser) {
      document.title = selectedUser.login
    }
  }, [selectedUser])

  useEffect(() => {
    axios.get<SearchResult>('https://api.github.com/search/users?q=hreff')
      .then(res => setUsers(res.data.items))
  }, [])

  return (
    <div className={s.container}>
      <div>
        <div>
          <input type='text' placeholder='search' /><button>find</button>
        </div>
        <ul>
          {
            users.map(u => <li
              key={u.id}
              className={selectedUser === u ? s.selected : ''}
              onClick={() => {
                setSelectedUser(u)
              }}
            >{u.login}</li>)
          }
        </ul>
      </div>
      <div>
        <h2>usersname</h2>
        <div>details</div>
      </div>
    </div>
  )
}


export default GithubPage