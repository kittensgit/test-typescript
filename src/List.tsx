import React, { useEffect, useState } from 'react';
import s from './Github.module.css';
import { SearchResult, SearchUserType } from './GithubPage';
import axios from 'axios';

type ListPropsType = {
    term: string
    selectedUser: SearchUserType | null
    onUserSelected: (user: SearchUserType) => void
}

const List = (props: ListPropsType) => {

    const [users, setUsers] = useState<SearchUserType[]>([])


    useEffect(() => {
        axios.get<SearchResult>(`https://api.github.com/search/users?q=${props.term}`)
            .then(res => setUsers(res.data.items))
    }, [props.term])

    return (
        <ul>
            {
                users.map(u => <li
                    key={u.id}
                    className={props.selectedUser === u ? s.selected : ''}
                    onClick={() => {
                        props.onUserSelected(u)
                    }}
                >{u.login}</li>)
            }
        </ul>

    )
}

export default List