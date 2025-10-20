import type { FooterData } from "../component/Footer/Footer";

export const footerData: FooterData = {
  brand: {
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.",
  },
  sections: [
    {
      title: "Service",
      links: [
        { name: "Payment & Tax", path: "#" },
        { name: "Features", path: "#" },
        { name: "View Booking", path: "#" },
        { name: "Support", path: "#" },
      ],
    },
    {
      title: "About",
      links: [
        { name: "About us", path: "#" },
        { name: "News", path: "#" },
        { name: "Pricing", path: "#" },
        { name: "New Property", path: "#" },
      ],
    },
  ],
  location: {
    title: "Our Location",
    desc: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
  },
  socialLinks: [
    { name:'../assets/image/facebook.svg',
     path: "#" },    
    { name:"../assets/image/twitter.svg", path: "#" },
    { name: "../assets/image/linkedin.svg",
      path: "#" },   
  ],
  privacy: "Copyright 2024 flora. All Rights Reserved",
  privacyLink :[
    {name: "Terms & Conditions", path: ""},
    {name: "Privacy Policy", path: ""},
  ]

};
