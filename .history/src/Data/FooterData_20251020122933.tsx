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
        { name: "Payment & Tax"},
        { name: "Features"},
        { name: "View Booking" },
        { name: "Support" },
      ],
    },
    {
      title: "About",
      links: [
        { name: "About us" },
        { name: "News" },
        { name: "Pricing" },
        { name: "New Property" },
      ],
    },
  ],
  location: {
    title: "Our Location",
    desc: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
  },
  socialLinks: [
    { name:'../assets/image/facebook.svg', },    
    { name:"../assets/image/twitter.svg" },
    { name: "../assets/image/linkedin.svg" },   
  ],
  privacy: "Copyright 2024 flora. All Rights Reserved",
  privacyLink :[
    {name: "Terms & Conditions"},
    {name: "Privacy Policy"},
  ]

};
