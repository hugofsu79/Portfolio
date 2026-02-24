
export const radius = {
    Basic: 4,
    inter: 12,
    circle: 1000,
} as const;

export type RadiusToken = keyof typeof radius;