import imgGrid from "./assets/UVC_image.jpg";
import imgSolar from "./assets/Permanent_image.jpg";
import imgWind from "./assets/Proven_image.png";

export const innovationsSection = {
  title: "Latest Innovations",
  subheading1_1: "Discover our cutting-edge",
  subheading1_2: " technology approach",
  innovations: [
    {
      title: "Eco-friendly",
      description:
        "Bioluminescence inspired low intensity UVC light, maintain clean surface on objects under water.",
      visual: imgGrid,
    },
    {
      title: "Permanent",
      description:
        "Permanent placement in submarine surfaces for years in different oceans around the planet.",
      visual: imgSolar,
    },
    {
      title: "Proven",
      description:
        "Proven complete prevention of microorganisms and biofouling from accumulating on any surface.",
      visual: imgWind,
    },
  ],
  visual: "innovations-section-image.jpg",
  callToAction: "Explore the Future with Galuxea",
  button: "Learn More",
};
