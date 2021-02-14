import { Slide, SlideTheme } from './types';

export const actionSetTheme = (theme: SlideTheme) => ({ type: 'theme', theme } as const);

export const actionNext = () => ({ type: 'next' } as const);

export const actionPrev = () => ({ type: 'prev' } as const);

export const actionRestart = () => ({ type: 'restart' } as const);

export const actionUpdate = (data: Partial<Slide>) => ({ type: 'update', data } as const);

export const actionTimer = () => ({ type: 'timer' } as const);

export const actionMessage = (action: string, params: string) => ({ type: 'message', action, params } as const);

export type Action = 
    | ReturnType<typeof actionNext> 
    | ReturnType<typeof actionPrev> 
    | ReturnType<typeof actionRestart> 
    | ReturnType<typeof actionMessage> 
    | ReturnType<typeof actionSetTheme> 
    | ReturnType<typeof actionTimer>;
