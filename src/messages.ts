import { SlideTheme } from './application/types';

export const messageUpdate = (alias: string, data: object) => ({ 
    type: 'message@UPDATE',
    alias,
    data,
} as const);

export const messageSetTheme = (theme: SlideTheme) => ({ 
    type: 'message@SET_THEME',
    theme,
} as const);

export const messageAction = (action: string, params: string) => ({ 
    type: 'message@ACTION',
    action,
    params,
} as const);

export type XMessage = 
    | ReturnType<typeof messageUpdate> 
    | ReturnType<typeof messageSetTheme> 
    | ReturnType<typeof messageAction>;
