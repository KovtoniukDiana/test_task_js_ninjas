

export interface ISuperhero {
  nickname: string;
  realName: string;
  originDescription: string;
  superpowers: string;
  catchPhrase:string;
  images?: string[];
}



export interface IUpdateSuperhero {
  nickname?: string;
  realName?: string;
  originDescription?: string;
  superpowers: string;
  catchPhrase:string;
  images?: string[];
}
