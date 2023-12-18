'use client'

import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [controller, setController] = useState()

    useEffect( () => {
        const abortController = new AbortController()
        setController(abortController)
        fetch(url, {signal: abortController.signal})
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => setError(err))
            .finally(() => {setLoading(false)})

        return () => abortController.abort()
    }, [])

    const handleCancelRequest = () => {
        if (controller) {
            controller.abort()
            setError('Request cancelled')
            console.log('request cancelled')
        }
    }

    return {data, loading, error, handleCancelRequest}
}