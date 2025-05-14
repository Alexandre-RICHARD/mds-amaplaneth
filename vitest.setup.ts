(globalThis as any).route = (name: string) => `/${name}`;
(globalThis as any).route = Object.assign((name: string) => `/${name}`, {
    current: (name: string) => false,
});
