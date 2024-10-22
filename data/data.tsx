import { blogs } from "./blogs"
import { experiences } from "./experience"
import { projects } from "./projects"

export const DATA = {
  name: "Himanshi Sharma",
  age: 21,
  pronouns: "she/her",
  description:
    "On the verge of graduation, ready to build tomorrow’s technology today.",
  skills: [
    {
      title: "Languages",
      items: ["C++", "Python", "HTML", "CSS", "SQL"],
    },
    
    {
      title: "Tools",
      items: ["Firebase", "Git & Github"],
    },
  ],
  experience: experiences,
  projects: projects,
  blogs: blogs,
  resume:
    "https://drive.google.com/file/d/1VwT9g95C87YWBQ25kUbJM2LlX6VLBCQ8/view?usp=drive_link",
  socials: {
    github: "https://github.com/Himanshhiii",
    linkedin: "https://www.linkedin.com/in/himanshi-sharma-22b1a2232/",
    gmail: "mailto:shimanshi799@gmail.com",
    x: "https://x.com/HimanshiS23602",
  },
}
