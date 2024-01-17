export interface IProjects {
    src: string;
      alt: string;
      title: string;
      width: string;
      height: string;
      description: string;
      links: Links[];
}

interface Links {
    name: string;
    href: string;
}