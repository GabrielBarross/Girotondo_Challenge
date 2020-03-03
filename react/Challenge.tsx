import React, { useEffect, useState } from 'react'
import { ExtensionPoint, Session } from 'vtex.render-runtime'
import { getSession } from './modules/session'


type SessionResponse = Session
const useSessionResponse = () => {
    const [session, setSession] = useState<SessionResponse>()
    const sessionPromise = getSession()

    useEffect(() => {
        if (!sessionPromise) {
            return
        }

        sessionPromise.then(sessionResponse => {
            const response = sessionResponse.response as SessionResponse

            setSession(response)
        })
    }, [sessionPromise])

    return session
}

const isLogged = (sessionResponse: SessionResponse | undefined) => {
    if (sessionResponse == null) {
        return false
    }
    const isLoggedIn = (sessionResponse as Session).namespaces?.profile?.email
    if (isLoggedIn) {
        return true
    }
    return false
}
const Challenge = () => {
    const sessionResponse = useSessionResponse()
    const profileCondition = isLogged(sessionResponse)
    const [allowed, setAllowed] = useState(false)

    useEffect(() => {
        if (profileCondition) {
            setAllowed(true)
        } else {
            setAllowed(false)
        }
    }, [sessionResponse])
    return (
        <>
            {allowed ? (
                <ExtensionPoint id="custom-challenge-accepted" />
            ) : (
                    <ExtensionPoint id="custom-challenge-denied" />
                )}
        </>
    )
}



export default Challenge