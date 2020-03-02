import React, { useMemo } from 'react'
import { ExtensionPoint } from 'vtex.render-runtime'

const Challenge = () => {
    const isAllowed = useMemo(() => {
        return new Date().getMinutes() % 2 == 0
    }, [])
    return (
        <>
            {isAllowed ? (
                <ExtensionPoint id="b2b-challenge-accepted" />
            ) : (
                    <ExtensionPoint id="b2b-challenge-denied" />
                )}
        </>
    )
}

export default Challenge