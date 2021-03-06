export enum UserFlag {
    ACTIVE_USER = 1 << 0,
    DEVELOPER = 1 << 1,
    SYSTEM = 1 << 2,
}
export enum AvatarFlag {
    PRO_USER = 1 << 0,
    APPLICATION = 1 << 1,
}

export enum AppFlag {
    NORMAL = 1 << 0,
    VERIFIED = 1 << 1,
    SYSTEM = 1 << 3,
}

export enum Type {
    USER = 1 << 0,
    AVATAR = 1 << 1,
    APP = 1 << 2,
}
export type Flag = UserFlag | AvatarFlag | AppFlag;

export interface ISnowflake {
    id: number;
    timestamp: number;
    type: string;
    flags: string[];
    count: number;
}
