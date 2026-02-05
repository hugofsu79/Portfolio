export const space = {
    0: 0,
    2: 2,
    4: 4,
    8: 8,
    12: 12,
    16: 16,
    24: 24,
    32: 32,
    48: 48,
    64: 64,
    96: 96,
    110: 110,
} as const;

export type Space = keyof typeof space;