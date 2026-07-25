import { useState } from "react"

export function usePagination() {
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    const nextPage = () => {
        if (page < totalPages) {
            setPage((p) => p + 1)
        }
    }

    const previousPage = () => {
        if (page > 1) {
            setPage((p) => p - 1)
        }
    }

    return {
        page,
        totalPages,
        setPage,
        setTotalPages,
        nextPage,
        previousPage,
    }
}
