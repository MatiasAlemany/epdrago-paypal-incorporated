export type PageParams<K extends Record<string, string>, S extends Record<string, string> = {}> = {
    params: K,
    searchParams: S
}