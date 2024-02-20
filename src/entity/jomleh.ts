export type Jomleh = {
  id: number;
  jomleh: string;
  added: Date;
  context?: Context;
};

export type Context = {
  title: string;
  url?: string;
};
