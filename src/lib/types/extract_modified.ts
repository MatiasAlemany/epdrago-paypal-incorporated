export type ExtractModified<T, K extends keyof T, O extends T[K]> = Extract<T, { [k in K]: O }>




