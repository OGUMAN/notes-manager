export interface INote {
  title: string;
  text: string;
  id: number;
  date: {
    creation: number;
    edited: number | null;
  };
  color: string;
}

export interface INoteCreate {
  title: string;
  text: string;
  color: string;
}

export interface IMenuItem {
  text: string;
  icon: string;
  action?: (note: INote) => void;
}
