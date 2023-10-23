declare module 'geomagnetism' {
  export interface Model {
    point: (location: [number, number]) => { decl: number }
  }

  export function model(date?: Date): Model;

  export const geomagnetism: {
    model: typeof model;
  };
}