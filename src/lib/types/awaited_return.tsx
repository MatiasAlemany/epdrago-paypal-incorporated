type AwaitedReturn<T extends (...args: any) => Promise<any>> = Awaited<ReturnType<T>>
