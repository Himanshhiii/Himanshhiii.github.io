//import { LinkPreview } from "@/components/ui/link-preview"

const Quick_Heal = {
  role: "UI Developer Intern",
  location: "Remote",
  company: {
    url: "https://www.quickheal.co.in/",
    name: "Quick Heal",
  },
  time: "July, 2024 - Aug, 2024",
  skills: [
    "Angular.js",
    "Tailwindcss",
    "Typescript",
    "Git & Github",
  ],
  description: [
    <span>
      Enhanced the user interface by working with Angular, 
       HTML, and CSS, contributing to a better
       frontend experience for users.
    </span>,
    <span>
     Resolved nearly 20 critical bugs identified during testing,
     ensuring smoother functionality of the user interface.
    </span>,
    <span>
      Delivered production-ready code, ensuring that my changes were
      successfully integrated and deployed in the live environment.
    </span>
  ],
}

type Experience = typeof Quick_Heal

const Alois_Solutions: Experience = {
  role: "MEVN Developer Intern",
  location: "Vadodra, Gujarat",
  company: {
    url: "https://www.aloissolutions.com/about",
    name: "Alois Solutions",
  },
  time: "June, 2024 - June,2024",
  skills: ["Vue.js", "Tailwindcss", "Bootstrap", "Typescript", "Git & Github"],
  description: [
    <span>
      Led the development of a commercial website for Akinolabs,
       building the project from the ground up using Vue.js.
    </span>,
    <span>
      Single-handedly managed all aspects of the project, 
      from initial setup to final implementation.
    </span>,
    <span>
      Built a fully functional and scalable website, now ready to go live, 
      ensuring a seamless user experience and efficient performance.
    </span>
  ],
}

// Add Objects to the array to add more experiences
export const experiences = [Quick_Heal, Alois_Solutions]
