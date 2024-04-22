interface Page {
  title: string;
  url: string;
  isArt: boolean;
  imageUrl: string;
}

export const pageList: Page[] = [
  {
    title: "Paintings",
    url: "/art/paintings",
    isArt: true,
    imageUrl: "/assets/thumbnails/paintings.png",
  },
  {
    title: "Drawings",
    url: "/art/drawings",
    isArt: true,
    imageUrl: "/assets/thumbnails/drawings.png",
  },
  {
    title: "Sculpture",
    url: "/art/sculpture",
    isArt: true,
    imageUrl: "/assets/thumbnails/3d.png",
  },
  {
    title: "Digital Art",
    url: "/art/digitalart",
    isArt: true,
    imageUrl: "/assets/thumbnails/digital2.png",
  },
  {
    title: "Sobremesa",
    url: "/misc/sobremesa",
    isArt: false,
    imageUrl: "/assets/thumbnails/sobremesa.png"
  },
  // {
  //   title: "Smart Microscope",
  //   url: "/misc/smartmicroscope",
  //   isArt: false,
  // },
  {
    title: "What Font Are You?",
    url: "/misc/quiz",
    isArt: false,
    imageUrl: "/assets/thumbnails/quiz.png"
  },
  // {
  //   title: "Bookshelf",
  //   url: "/misc/bookshelf",
  //   isArt: false,
  // },
  {
    title: "Vitalize",
    url: "/misc/vitalize",
    isArt: false,
    imageUrl: "/assets/thumbnails/vitalize.png"
  },
]