import gourImg from "./assets/gour.png";
import forestImg from "./assets/forest1.png";
import villageImg from "./assets/pvillage.png";
import bwglogo from "./assets/OTBWG.png"
import byglogo from "./assets/OTBYG.png"
import wwglogo from "./assets/WWG.png"
import wayfinderlogo from "./assets/wayfinder.png"
import AOCAWOL from "./assets/aocawol.png"
import JT from "./assets/JT122406.png"
import CORGI from "./assets/CorgiTaco.png"
import YABOICHIPS from "./assets/Chips.png"
import RETRO from "./assets/retro.png"
import ISSAC from "./assets/issac.png"
import type {ModEntry, Person} from "./Types.ts";


export const HomePageImages: { url: string, title: string, subtitle: string }[] = [
    { url: gourImg, title: 'IronWood Gour', subtitle: 'A mysterious new wood type' },
    { url: forestImg, title: 'Lush Forest', subtitle: 'Explore dense greenery' },
    { url: villageImg, title: 'Pumpkin Patch Village', subtitle: 'Cozy autumn vibes' }
];

export const ModEntries: ModEntry[] = [
    { name: "Oh The Biomes We've Gone", logo: bwglogo, description: "Oh The Biomes We've Gone is the sequel to the timeless Oh The Biomes You'll Go mod for 1.20.1+ with over 50 breathtaking magical and realistic biomes. BWG will take you on an adventure by adding diverse and detailed life to Minecraft. BWG also adds new unique mobs, structures, and hundreds of blocks to utilize.", modrinthSlug: "NTi7d3Xc"},
    { name: "Oh The Biomes You'll Go", logo: byglogo, description: "Oh The Biomes You'll Go is an exploration and adventure mod designed to take you on a road trip across Minecraft like no other! Explore over 80 magical, realistic, and breathtaking biomes.", modrinthSlug: "uE1WpIAk" },
    { name: "All The Wood We've Got", logo: wwglogo, description: "All The Wood We've Got is a Side mod for Oh The Biomes We've Gone that adds in More Wood Block Variants. Such as Chests, Trapped Chests, Ladders and Barrels. With more Planned!", modrinthSlug: "qvq8iHWh" },
    { name: "Wayfinder", logo: wayfinderlogo, description: "A brand new immersive way to explore! The Wayfinder will guide those who are lost to their destinations.", modrinthSlug: "909sOSOR" }
];

export const People: Person[] = [
    { name: "AOCAWOL", role: "Owner/Lead Artist/Lead Designer", image: AOCAWOL, description: "Hi! I am AOCAWOL I am the lead artist, concept &content designer for Potion Studios. I was the original developer of Oh The Biomes You'll Go and have been developing it since I was 13 (now 22 blegh). I love showcasing my creative side through our projects and also love nature/outdoors. Huge thanks to everyone that supports our mods ❤️"},
    { name: "J.T.", role: "Software Engineer", image: JT, description: "Hey, I am the lead software engineer on Oh The Biomes We've Gone and Wayfinder, I also have worked on Biomes You'll go and have many other projects including Pixelmon Generations. In my free time I Love playing the Legend of Zelda Series of games. I also enjoy playing and watching baseball and basketball."},
    { name: "Corgi Taco", role: "Software Engineer", image: CORGI, description: "N/A"},
    { name: "YaBoiChips", role: "Software Engineer", image: YABOICHIPS, description: "Heyo, I'm Chips! I'm the entity developer for Oh The Biomes You'll Go. I also have a solo project called Charms, and I'm the CEO of an eSports non-profit called French Bread Gaming. I love minecraft and super smash bros and have a passion for modding! Thanks for playing our stuff!"},
    { name: "retroPacifist", role: "Admin/Concept Designer", image: RETRO, description: "Hi! I'm retroPacifist. I've got a passion for mobs and a penchant for design, you can find me on most platforms as @retroPacifist. Go check out my personal project \"Features & Creatures\"! Outside of Minecraft, I mostly engage in Risk of Rain and Pokemon spaces."},
    { name: "isaactheletterc", role: "Admin", image: ISSAC, description: "Hello there! My name is Isaac - though I go more frequently by \"C\" or \"C/\". I'm an admin and the resident Brit on the Potion Studios discord. I'm no good at modding, though I've tried my hand at it once or twice (my magnum opus is a mod that just increases fall damage massively). My interests (other than Minecraft!) mostly lie in philosophy, literature and art history. I'm always around and happy to chat to newcomers!"}
];