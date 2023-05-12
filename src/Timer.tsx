import React, { useEffect, useState } from 'react'

type TimerPropsType = {
    seconds: number
    onChange: (actualSeconds: number) => void
}

const Timer = (props: TimerPropsType) => {
    const [seconds, setSeconds] = useState(props.seconds)
    useEffect(() => {
        setSeconds(props.seconds)
    }, [props.seconds])

    useEffect(() => {
        props.onChange(seconds)
    }, [seconds])

    useEffect(() => {
        // setInterval(() => {
        //  setSeconds((prev) => prev - 1) 
        // }, 1000)
    }, [])

    return (
        <div>{seconds}</div>
    )
}


export default Timer