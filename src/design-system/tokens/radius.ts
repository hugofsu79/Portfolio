
export const radius = {
    0: 0,
    4: 4,
    8: 8,
    12: 12,
    1000: 1000,
} as const;

export type RadiusToken = keyof typeof radius;