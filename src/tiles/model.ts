export type TileState = "install" | "in-progress" | "done";

export interface TileModel {
  id: string;
  name: string;
  description: string;
  version: string;
  size: string;
  state: TileState;
  progress: number;
  thumbnail?: string;
}

export const tileList: TileModel[] = [
  {
    id: "word",
    name: "Microsoft Word",
    description:
      "Microsoft Word is a word processor developed by Microsoft. It was first released on October 25, 1983, under the name Multi-Tool Word for Xenix systems.",
    version: "0001.00002.00003.0321",
    size: "2.7GB",
    state: "install",
    progress: 0,
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/f/fd/Microsoft_Office_Word_%282019–present%29.svg",
  },

  {
    id: "excel",
    name: "Microsoft Excel",
    description:
      "Microsoft Excel is the industry leading spreadsheet software program, a powerful data visualization and analysis tool.",
    version: "0010.00002.00003.4567",
    size: "1.37GB",
    state: "done",
    progress: 0,
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019–present%29.svg",
  },
];
