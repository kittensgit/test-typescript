import React, { useEffect, useState } from 'react'
import s from './Github.module.css'
import List from './List'
import UserInfo from './UserInfo'
import Search from './Search'

export type SearchUserType = {
  login: string
  id: number
}

export type SearchResult = {
  items: SearchUserType[]
}

export type UserType = {
  login: string
  id: number
  avatar_url: string
  followers: number
}

const GithubPage = () => {

  let initialSeacrhState = 'href'

  const [selectedUser, setSelectedUser] = useState<SearchUserType | null>(null)
  const [searchTerm, setSearchTerm] = useState(initialSeacrhState)

  useEffect(() => {
    if (selectedUser) {
      document.title = selectedUser.login
    }
  }, [selectedUser])


  return (
    <div className={s.container}>
      <div>
        <Search value={searchTerm} onSubmit={(value: string) => { setSearchTerm(value) }} />
        <button onClick={() => setSearchTerm(initialSeacrhState)}>reset</button>
        <List term={searchTerm} onUserSelected={setSelectedUser} selectedUser={selectedUser} />
      </div>
      <UserInfo selectedUser={selectedUser} />
    </div>
  )
}


export default GithubPage