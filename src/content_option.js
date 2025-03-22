const logotext = "M BILAL";
const meta = {
    title: "M.BILAL TANVEER",
    description: "I am Bilal, a skilled web developer with expertise in both frontend and backend development. I specialize in creating dynamic, user-friendly, and efficient web solutions.",
};

import myImage from "./assets/images/w.png"; // Correct path use karein


const introdata = {
    title: "I’m M.BILAL",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "I'm Bilal, a full-stack web developer with expertise in both frontend and backend development. I build high-performance, user-friendly websites and applications, ensuring smooth functionality and modern design.",
    your_img_url: myImage, // Local image use ho rahi hai


    
};


const dataabout = {
    title: "A bit about myself",
    aboutme: "I am Bilal, a skilled web developer with expertise in both frontend and backend development. I specialize in building modern, user-friendly, and high-performance web applications.",
};
const worktimeline = [
    {
        jobtitle: "Full Stack Web Developer",
        where: "Freelance",
        date: "2025 - Present",
    },
    {
        jobtitle: "Frontend Developer",
        where: "Tech Solutions",
        date: "2023 - 2024",
    },
    {
        jobtitle: "Backend Developer",
        where: "Code Innovators",
        date: "2021 - 2023",
    },
];


const skills = [{
    name: "Python",
    value: 30,
},
{
    name: "HTML",
    value: 75,
},
{
    name: "Djano",
    value: 50,
},
{
    name: "Javascript",
    value: 80,
},
{
    name: "React",
    value: 70,
},
{
    name: "Jquery",
    value: 75,
},
];
const services = [
    {
        title: "Full Stack Web Development",
        description: "I build scalable, high-performance web applications with seamless frontend and backend integration, ensuring an excellent user experience.",
    },
    {
        title: "Custom Web Solutions",
        description: "From business websites to dynamic web applications, I create tailored solutions that align with client needs and industry standards.",
    },
    {
        title: "Modern UI/UX Design",
        description: "I design sleek, intuitive, and user-friendly interfaces that enhance engagement and provide a smooth digital experience.",
    },
];

import img1 from "./assets/images/1.jpg";
import img2 from "./assets/images/2.jpg";
import img3 from "./assets/images/3.jpg";
import img4 from "./assets/images/4.jpg";
import img5 from "./assets/images/5.jpg";
import img6 from "./assets/images/6.jpg";
import img7 from "./assets/images/7.jpg";
import img8 from "./assets/images/8.jpg";
import img9 from "./assets/images/9.jpg";
import img10 from "./assets/images/10.jpg";
import img11 from "./assets/images/11.jpg";
import img12 from "./assets/images/12.jpg";

const dataportfolio = [
    { img: img1, description: "A moment of stillness, where silence speaks louder than words.", link: "#" },
    { img: img2, description: "Light and shadow dancing together in perfect harmony. ✨", link: "#" },
    { img: img3, description: "Eyes tell stories that words can never express. 👁️", link: "#" },
    { img: img4, description: "Soft whispers of the wind, carrying dreams far and beyond.", link: "#" },
    { img: img5, description: "Lost in the beauty of simplicity, found in the depth of emotions.", link: "#" },
    { img: img6, description: "Every glance, a poetry in itself; every moment, a masterpiece. 🎨", link: "#" },
    { img: img7, description: "Some moments don’t need captions, just feelings.", link: "#" },
    { img: img8, description: "Serenity in every pixel, grace in every detail.", link: "#" },
    { img: img9, description: "The world pauses for those who shine from within. ✨", link: "#" },
    { img: img10, description: "Time stands still when beauty meets elegance. ⏳", link: "#" },
    { img: img11, description: "Not just a picture, but a story waiting to be felt.", link: "#" },
    { img: img12, description: "Every frame is a memory, every click is a feeling.", link: "#" },
];




const contactConfig = {
    YOUR_EMAIL: "itxbialyou890@gmail.com",
    YOUR_FONE: "(+92)3105445335",
    description: "Let's connect! Whether you need a custom web solution, a high-performance website, or a consultation on your project, feel free to reach out. ",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/

    YOUR_SERVICE_ID: "service_bw32gmm",
    YOUR_TEMPLATE_ID: "template_g788ptl",
    YOUR_USER_ID: "ezI1p7WC8_ZoDHgUl",
};

const socialprofils = {
    Instagram: "https://www.instagram.com/code._with_bilal/"
    github: "https://github.com/bilaltanveer2/portfoilo",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    whatsapp: "https://wa.me/923105445335",

};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
