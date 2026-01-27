import gourImg from "./assets/gour.png";
import forestImg from "./assets/forest1.png";
import villageImg from "./assets/pvillage.png";
import bwglogo from "./assets/OTBWG.png"
import byglogo from "./assets/OTBYG.png"
import wwglogo from "./assets/WWG.png"
import wayfinderlogo from "./assets/wayfinder.png"
import type {ModEntry} from "./Types.ts";


export const HomePageImages: { url: string, title: string, subtitle: string }[] = [
    { url: gourImg, title: 'IronWood Gour', subtitle: 'A mysterious new wood type' },
    { url: forestImg, title: 'Lush Forest', subtitle: 'Explore dense greenery' },
    { url: villageImg, title: 'Pumpkin Patch Village', subtitle: 'Cozy autumn vibes' }
];

export const ModEntries: ModEntry[] = [
    { name: "Oh The Biomes We've Gone", logo: bwglogo, description: "Oh The Biomes We've Gone is the sequel to the timeless Oh The Biomes You'll Go mod for 1.20.1+ with over 50 breathtaking magical and realistic biomes. BWG will take you on an adventure by adding diverse and detailed life to Minecraft. BWG also adds new unique mobs, structures, and hundreds of blocks to utilize."},
    { name: "Oh The Biomes You'll Go", logo: byglogo, description: "Oh The Biomes You'll Go is an exploration and adventure mod designed to take you on a road trip across Minecraft like no other! Explore over 80 magical, realistic, and breathtaking biomes." },
    { name: "All The Wood We've Got", logo: wwglogo, description: "All The Wood We've Got is a Side mod for Oh The Biomes We've Gone that adds in More Wood Block Variants. Such as Chests, Trapped Chests, Ladders and Barrels. With more Planned!" },
    { name: "Wayfinder", logo: wayfinderlogo, description: "A brand new immersive way to explore! The Wayfinder will guide those who are lost to their destinations." }
];