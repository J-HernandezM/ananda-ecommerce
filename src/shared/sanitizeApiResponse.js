export const sanitizeApiResponse = (response) => {
    if (!response || !response.data) {
        return
    }

    if (Array.isArray(response.data)) {
        const sanitized = response.data.reduce(
            (acc, curr) => {
                const item = {
                    id: curr.id,
                    ...curr.attributes
                }
                acc.push(item)
                return acc
            }, []
        )
        return sanitized
    }

    const sanitized = {
        id: response.data.id,
        ...response.data.attributes
    }
    return sanitized
}