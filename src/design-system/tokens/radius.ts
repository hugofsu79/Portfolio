
export const radius = {
    Basic: 4,
    circle: 1000,
} as const;

export type RadiusToken = keyof typeof radius;