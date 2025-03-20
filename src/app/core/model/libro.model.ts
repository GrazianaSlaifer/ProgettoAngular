// Questo codice descrive come sono organizzate le informazioni che ricevi quando cerchi libri online.
// Immagina che tu faccia una ricerca su un sito di libri: il sito ti risponde con una lista di libri,
// e questo codice dice come saranno strutturati i dettagli di ogni libro (titolo, autore, anno di pubblicazione, ecc.).



export interface RichiestaLibri {
    numFound: number
    start: number
    numFoundExact: boolean
    num_found: number
    documentation_url: string
    q: string
    offset: any
    docs: Libro[]
}

export interface Libro {
    author_key?: string[]
    author_name?: string[]
    cover_edition_key?: string
    cover_i?: number
    edition_count: number
    first_publish_year?: number
    has_fulltext: boolean
    ia?: string[]
    ia_collection_s?: string
    key: string
    language?: string[]
    lending_edition_s?: string
    lending_identifier_s?: string
    public_scan_b: boolean
    title: string
    subtitle?: string
}


