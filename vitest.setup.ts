(globalThis as any).route = (name?: string) => {
    if (name) {
        return `/${name}`;
    }
    return {
        current: () => false,
    };
};
