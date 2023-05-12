import React, { useEffect, useState } from 'react'
import { SearchUserType, UserType } from './GithubPage'
import axios from 'axios'
import Timer from './Timer'

type UserInfoPropsType = {
    selectedUser: SearchUserType | null
}

const startTimerSeconds = 10

const UserInfo = (props: UserInfoPropsType) => {

    const [userDetails, setUserDetails] = useState<null | UserType>(null)
    const [seconds, setSeconds] = useState(startTimerSeconds)

    useEffect(() => {
        if (!!props.selectedUser) {
            axios
                .get<UserType>(`https://api.github.com/search/users/${props.selectedUser.login}`)
                .then(res => {
                    setUserDetails(res.data)
                    setSeconds(startTimerSeconds)
                })
        }
    }, [props.selectedUser])

    useEffect(() => {
        if (seconds < 1) {
            setUserDetails(null)
        }
    }, [seconds])


    return (
        <div>
            <Timer seconds={seconds} onChange={setSeconds} />
            <h2>{userDetails?.login}</h2>
            {userDetails &&
                <div>
                    <img alt='img' src={userDetails.avatar_url} />
                    <br />
                    {userDetails.login}, {userDetails.followers}
                </div>
            }
        </div>

    )
}

export default UserInfo