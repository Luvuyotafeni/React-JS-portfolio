import smj from "./pics/SMJ (1)_resized (1).png"
import bank from "./pics/Bank app_resized.png"
import versatile from "./pics/Versatile_resized.png"
import portfolio from "./pics/portfolio_resized.png"
import rdp from "./pics/WhatsApp Image 2024-02-02 at 08.24.49_resized_resized_resized.jpeg"
/* exported as data that will be used and showed at each project container*/
const data = [
    {
      id: 1,
      image: versatile,
      title: "Versatile Website",
      github: <a href="https://github.com/Luvuyotafeni/website"><i class='bx bxl-github'></i></a>,
      link: <a><i class='bx bx-link'></i></a>,
      desc: "This is a website that is meant to advertise skills offered at the company and also allow booking of the services. using HTML,CSS and Javascript",
    },
    {
      id: 2,
      image: bank,
      title: "Banking App",
      github: <a href="https://github.com/Luvuyotafeni/banking-app"><i class='bx bxl-github'></i></a>,
      link: <a><i class='bx bx-link'></i></a>,
      desc: "This is a banking application that keeps client info and allows transaction, using Python, Tinkter and SQLlite",
    },
    {
      id: 3,
      image: smj,
      title: "Barbershop",
      github: <a href="https://github.com/Luvuyotafeni/SMJ-Barbershop"><i class='bx bxl-github'></i></a>,
      link: <a><i class='bx bx-link'></i></a>,
      desc: "This is a website that is used to reserve space on a Barbershop and displays work done so far, using HTML,CSS and Javascript",
    },
    {
      id: 4,
      image: rdp,
      title: "RDP Maintenance",
      github: <a href="https://github.com/Luvuyotafeni/RDP-Maintenance"><i class='bx bxl-github'></i></a>,
      
      desc: "This is an application that is used by the municipality and clients for reserving and knowing status for rdps, using JAVA, Swing controls and MYSQL",
    },
    {
      id: 5,
      image: portfolio,
      title: "Portfolio",
      github: <a href="https://github.com/Luvuyotafeni/portfolio"><i class='bx bxl-github'></i></a>,
      desc: "This is my Portfoio, it showcases my work, skills and ways to contact me, using Javasript, CSS and HTML.",
    },
    
  ]
  export default data
  