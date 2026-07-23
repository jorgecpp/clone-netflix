"use client";

import { useMovieTrailer } from "@/hooks/useMovieTrailer";

type WatchClientProps = {
    id: number;
};

export function WatchClient({ id }: WatchClientProps) {
    const { trailer } = useMovieTrailer(id);

    return (
        <iframe
            src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1`}
            allow="autoplay; fullscreen; encrypted-media"
            allowFullScreen
            className="flex-1 w-full"
        />
    );
}
