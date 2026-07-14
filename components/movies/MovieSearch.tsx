import { Input } from "@/components/ui/input"
type Props = {
    search: string
    onChange: (value: string) => void
}

export function MovieSearch({search, onChange}: Props){
    return(
        <Input
            value={search}
            onChange={(e) => onChange(e.target.value)}
            className="w-full max-w-lg"
            placeholder="Search movies..."
        />
    )
}
