import img1 from "./assets/person1.png";
import img2 from "./assets/person2.png";
import img3 from "./assets/person3.png";

export const testimonialsSection = {
  title: "What Our Customers Say",
  subheading1_1: "Trusted",
  subheading1_2: " Comments",
  testimonials: [
    {
      name: "Nikolas Fahiskog",
      visual: img1,
      occupation: "Innovation Catalyzer & Ex Philips CL",
      quote:
        "Environmental Impact Reduction",
    },
    {
      name: "Remco Lansbergen",
      visual: img2,
      occupation: "Signify Aquaculture & Ex Philips Alliance",
      quote:
        "Eco-Friendly Biofouling Control",
    },
    {
      name: "Kars-Michiel Lenssen",
      visual: img3,
      occupation: "Lighting Europe & Ex Philips Lighting",
      quote:
        "Reduced Maintenance and Waste",
    },
  ],
  visual: "customer-testimonials-image.jpg",
  callToAction: "Join Our Growing Community of Satisfied Customers",
  button: "Get Started",
};
