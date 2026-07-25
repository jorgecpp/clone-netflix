import { 
Pagination, 
PaginationContent, 
PaginationItem, 
PaginationPrevious, 
PaginationLink, 
PaginationNext,
PaginationEllipsis} from "@/components/ui/pagination"


type PaginationMediaProps = {
    page: number
    totalPages: number
    setPage: (page: number) => void
    nextPage: () => void
    previousPage: () => void
}

export function PaginationMedia({page, previousPage, setPage, totalPages, nextPage}: PaginationMediaProps){
    return(
        <section className="flex justify-center mt-10 mb-8">
            <Pagination>
                <PaginationContent>

                    <PaginationItem>
                        <PaginationPrevious
                        onClick={previousPage}
                        className={page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                        />
                    </PaginationItem>

                    {page > 2 && (
                        <>
                        <PaginationItem>
                            <PaginationLink onClick={() => setPage(1)}>
                                1
                            </PaginationLink>
                        </PaginationItem>

                        {page > 3 && (
                            <PaginationItem>
                            <PaginationEllipsis />
                            </PaginationItem>
                        )}
                        </>
                    )}

                    {page > 1 && (
                        <PaginationItem>
                        <PaginationLink onClick={() => setPage(page - 1)}>
                            {page - 1}
                        </PaginationLink>
                        </PaginationItem>
                    )}

                    <PaginationItem>
                        <PaginationLink isActive className="text-black">
                            {page}
                        </PaginationLink>
                    </PaginationItem>

                    {page < totalPages && (
                        <PaginationItem>
                        <PaginationLink onClick={() => setPage(page + 1)}>
                            {page + 1}
                        </PaginationLink>
                        </PaginationItem>
                    )}

                    {page < totalPages - 1 && (
                        <>
                            {page < totalPages - 2 && (
                                <PaginationItem>
                                <PaginationEllipsis />
                                </PaginationItem>
                            )}

                            <PaginationItem>
                                <PaginationLink onClick={() => setPage(totalPages)}>
                                {totalPages}
                                </PaginationLink>
                            </PaginationItem>
                        </>
                    )}

                    <PaginationItem>
                        <PaginationNext
                        onClick={nextPage}
                        className={
                            page === totalPages
                            ? "pointer-events-none opacity-50"
                            : "cursor-pointer"
                        }
                        />
                    </PaginationItem>

                </PaginationContent>
            </Pagination>
        </section>
    )
}