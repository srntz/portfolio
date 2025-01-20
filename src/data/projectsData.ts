interface IProjectData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  completed: boolean;
}

export const projectsData: IProjectData[] = [
  {
    id: 1,
    title: "Keyboard MIDI Controller",
    description:
      "A dependency-free MIDI device emulator package. It provides functionality for using a computer keyboard as a MIDI input device. Compatible with TypeScript and JavaScript.",
    imageUrl: "https://i.imgur.com/lRl3Kgr.png",
    completed: true,
  },
  {
    id: 2,
    title: "Coda",
    description:
      "A full-stack music album generator with a multi-layer random algorithm. It is based on the Spotify library and utilizes the Spotify Web API as its data source.",
    imageUrl: "https://i.imgur.com/gZDkSXI.png",
    completed: true,
  },
  {
    id: 3,
    title: "Uvaro Assess",
    description:
      "A Career success assessment tool being built in collaboration with and for a EdTech company, Uvaro.",
    imageUrl: "https://i.imgur.com/54i1DbU.png",
    completed: false,
  },
  {
    id: 4,
    title: "Cenaturi",
    description: "A web-based multi-oscillator polyphonic synthesizer.",
    imageUrl: "https://i.imgur.com/rcovMlU.png",
    completed: false,
  },
];
