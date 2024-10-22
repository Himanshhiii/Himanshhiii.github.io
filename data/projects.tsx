const routeoptimization: Project = {
  title: "route-optimization",
  date: "Oct, 2024",
  github: "https://github.com/Himanshhiii/route-optimization",
  description: [
    <span>
      Aims to enhance transportation efficiency by solving the Traveling Salesman Problem 
      (TSP) using advanced optimization techniques.
    </span>,
    <span>
      Implements algorithms such as simulated annealing and ant colony optimization to optimize 
      routes for carpooling solutions.
    </span>,
    <span>
      Provides code for calculating optimal paths, reducing travel distances, and improving overall
       logistics.
    </span>,
  ],
  skills: [
    "Python",
  ],
}

const chessMe: Project = {
  title: "chessMe",
  date: "Jul, 2024",
  github: "https://github.com/Himanshhiii/chessMe",
  description: [
    <span>
      Aims to create a chess game application that allows users to play against a computer-generated opponent, 
      enhancing user experience through interactive gameplay.
    </span>,
    <span>
      Built using TypeScript and Angular, ensuring a modern, responsive web application design with robust
       functionality.
    </span>,
    <span>
       Includes a user-friendly interface for making moves, visualizing the chessboard, and 
       displaying game status, along with basic rules enforcement.
    </span>,
  ],
  skills: [
    "Angular.js",
    "TypeScript",
  ],
}

const Musify: Project = {
  title: "Musify",
  date: "June, 2024",
  github: "https://github.com/Himanshhiii/Musify",
  description: [
    <span>
      Aims to provide users with a music discovery and streaming platform, allowing them to 
      explore and enjoy a wide variety of songs and artists.
    </span>,
    <span>
      Developed using the MERN stack, ensuring a robust and scalable web application architecture.
    </span>,
    <span>
      Includes user authentication, personalized playlists, song search functionality, 
      and an intuitive interface for an enhanced user experience.
    </span>,
  ],
  skills: [
    "React.js",
    "MongoDB",
  ],
}



export const projects: Project[] = [routeoptimization, chessMe, Musify]

interface Project {
  title: string
  date: string
  github: string
  description: JSX.Element[]
  skills: string[]
}

type Preview = StaticPreview | DynamicPreview

interface StaticPreview {
  url: string
  isStatic: true
  preview: string
}
interface DynamicPreview {
  url: string
  isStatic: false
}
