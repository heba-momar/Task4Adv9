import type { FooterData } from "../component/Footer/Footer";

export const footerData: FooterData = {
  brand: {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.",
  },
  sections: [
    {
      title: "Service",
      itemss: [
        { name: "Payment & Tax" },
        { name: "Features" },
        { name: "View Booking" },
        { name: "Support" },
      ],
    },
    {
      title: "About",
      itemss: [
        { name: "About us" },
        { name: "News" },
        { name: "Pricing" },
        { name: "New Property" },
      ],
    },
  ],
  location: {
    title: "Our Location",
    description: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
  },
  socialLinks: [
    { name: "/Task4/Images/Footer/facebook.png", path: "#" },
    { name: "/Task4/Images/Footer/twitter.png", path: "#" },
    { name: "/Task4/Images/Footer/linkedin.png", path: "#" },
  ],
  privacy: "Copyright 2024 flora. All Rights Reserved",
  privacyLink :[
    {name: "Terms & Conditions", path: ""},
    {name: "Privacy Policy", path: ""},
  ]

};
