interface Project {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  url: string;
  year: string;
}

export const projectsList: Project[] = [
  {
    title: "WellBuddies",
    description: "A mobile app to fit wellness into your schedule with the help of a digital pet",
    category: "Code, UI/UX",
    imageUrl: "/assets/thumbnails/wellbuddies.png",
    url: "/projects/wellbuddies",
    year: "2022",
  },
  {
    title: "Digital Room",
    description: "A digital model of the living room from the film The Farewell",
    category: "3D Modeling",
    imageUrl: "/assets/thumbnails/3d-modeling.png",
    url: "/projects/room",
    year: "2021",
  },
  {
    title: "Sexual Violence Prevention Program",
    description: "Managing Dartmouth’s sexual violence prevention curriculum",
    category: "Code, UI/UX",
    imageUrl: "/assets/thumbnails/svpp.png",
    url: "/projects/svpp",
    year: "2021-22",
  },
  {
    title: "Astrobunny",
    description: "An astronaut-bunny-robot roams the galaxy",
    category: "3D Modeling",
    imageUrl: "/assets/thumbnails/astrobunny.png",
    url: "/projects/astrobunny",
    year: "2021",
  },
  {
    title: "Presidential Commisson on Financial Aid",
    description: "An interactive website on financial aid",
    category: "UI/UX, Illustration",
    imageUrl: "/assets/thumbnails/pcfa.png",
    url: "/projects/pcfa",
    year: "2022",
  },
  {
    title: "Sunset Notes",
    description: "Sky-inspired notes dashboard",
    category: "Code",
    imageUrl: "/assets/thumbnails/notes.png",
    url: "/projects/notes",
    year: "2022",
  },
  // {
  //   title: "The Universe May Stop Expanding in Five Billion Years",
  //   description: "Zine illustrating a poem",
  //   category: "Illustration",
  // },
];