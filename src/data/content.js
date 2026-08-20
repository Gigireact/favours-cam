import Apex from "../assets/videos/Apex-sa.mp4";
import Kast from "../assets/videos/Kast.mp4";
import Owego from "../assets/videos/Owego.mp4";
import Pitch from "../assets/videos/Pitch-clinic.mp4";
import portp from "../assets/images/picsmile.png";
import portp8 from "../assets/images/portp8.jpeg";

import portp4 from "../assets/images/portp4.jpeg";
import portp5 from "../assets/images/portp5.jpeg";
import portp7 from "../assets/images/portp7.jpeg";
import portp9 from "../assets/images/portp9.jpeg";
import pic1 from "../assets/images/pic1.jfif";
import pic2 from "../assets/images/pic2.jfif";
import pic3 from "../assets/images/pic3.jfif";
import pic6 from "../assets/images/pic6.jfif";
import pic7 from "../assets/images/pic7.jfif";
import pic8 from "../assets/images/pic8.jfif";
import pic9 from "../assets/images/pic9.jfif";
import podcast from "../assets/videos/Podcast-video.mp4"


export const NAME = "favour's cam";

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/favours_cam?igsh=MTJmaXNvMTV0b21pMA==" },
  { label: "Tiktok", href: "https://www.tiktok.com/@favourudofiah?_r=1&_t=ZS-98dMPvrv4oz" },
  { label: "YouTube", href: "https://youtube.com/@favourudofiah?si=NcCaliLtZq47NIUP" },
  { label: "X", href: "https://x.com/Imabasi___" },
];

export const EMAIL = "favourudofiah@gmail.com";

export const IMAGES = {
  hero: portp,
  about: portp8,
};

export const VIDEOS = {
  work1: Owego,
  work2: Pitch,
  work3: Apex,
  work4: Kast,
};

export const WORK = [
  {
    id: "01",
    code: "00:14:02",
    title: "OWEGO PRODUCT LAUNCH",
    category: "Product Launch",
    role: "Video Production · Edit",
    year: "2026",
    blurb:
      "A launch video created to introduce an Owego product through clear storytelling, polished visuals and a campaign-focused edit.",
    video: VIDEOS.work1,
     link: "https://x.com/wysrenee/status/2017252036635398604?s=20",
  },
  {
    id: "02",
    code: "00:00:30",
    title: "PITCH CLINIC",
    category: "Event Coverage",
    role: "Video Coverage · Edit",
    year: "2025",
    blurb:
      "A 30-second video created to showcase the 1-week event/incubation for Superteam NG founders.",
    video: VIDEOS.work2,
    link: "https://www.instagram.com/reel/DPyqJrMDLid/",
  },
  {
    id: "03",
    code: "00:01:01",
    title: "SOLANA APEX",
    category: "Event Coverage",
    role: "Video Coverage · Colour Grade · Edit",
    year: "2025",
    blurb:
      "Event coverage for Solana Apex in South Africa, capturing the energy of the experience and shaping the footage through editing and colour grading.",
    video: VIDEOS.work3,
    link: "https://x.com/SuperteamNG/status/1906019453420089759",
  },
  {
    id: "04",
    code: "00:00:48",
    title: "KAST CARD",
    category: "Product Advertisement",
    role: "Video Production · Edit",
    year: "2025",
    blurb:
      "A product-focused advertisement created to showcase the Kast Card through engaging visuals, pacing and social-friendly storytelling.",
    video: VIDEOS.work4,
    link: "https://x.com/wysrenee/status/1996550060491092362?s=20",
  },
];

function IMAGES_KEY(key) {
  return IMAGES[key];
}

export const CAPABILITIES = [
  {
    tag: "1",
    title: "Directing & Concept",
    desc: "Treatment decks, shot lists and creative direction from a one-line brief to a locked script.",
    tools: "Treatments · Shot Lists · Storyboards",
  },
  {
    tag: "2",
    title: "Cinematography",
    desc: "Handheld, gimbal and locked-off work across commercial, documentary and event coverage.",
    tools: "RED · Sony Cinema Line · Prime Lenses",
  },
  {
    tag: "3",
    title: "Editing",
    desc: "Narrative-first cutting for brand films, docs and social — pace built around the story, not the deadline.",
    tools: "Premiere Pro · Avid · Frame.io",
  },
  {
    tag: "4",
    title: "Colour Grading",
    desc: "Look development and finishing that holds up across a whole campaign, not just one hero frame.",
    tools: "DaVinci Resolve · LUT Design",
  },
  {
    tag: "5",
    title: "AI Video & Generation",
    desc: "AI-generated plates and assets integrated into live-action timelines — used as a tool, not a shortcut.",
    tools: "Runway · Midjourney · Compositing",
  },
  {
    tag: "6",
    title: "Social & Content Systems",
    desc: "Cut-downs and native-format edits built for how each platform is actually watched.",
    tools: "Vertical Edits · Captioning · Reels",
  },
];


export const SPLASH_IMAGES = [
  pic1,
  pic2,
  pic3,
  pic6,
  pic7,
  pic8,
  pic9,
  portp4,
];


export const CARD_CONFIGS = [
  { x: "-80vw", y: "-60vh", rotateX: 45,  rotateY: -30, rotateZ: -18, scale: 0.6, w: 220, h: 300 },
  { x:  "60vw", y: "-50vh", rotateX: -35, rotateY:  40, rotateZ:  22, scale: 0.5, w: 180, h: 240 },
  { x: "-70vw", y:  "40vh", rotateX:  30, rotateY:  25, rotateZ: -12, scale: 0.7, w: 200, h: 260 },
  { x:  "70vw", y:  "50vh", rotateX: -40, rotateY: -20, rotateZ:  15, scale: 0.55,w: 240, h: 320 },
  { x:  "10vw", y: "-75vh", rotateX:  55, rotateY:  10, rotateZ: -25, scale: 0.45,w: 160, h: 210 },
  { x: "-20vw", y:  "70vh", rotateX: -25, rotateY: -35, rotateZ:  20, scale: 0.65,w: 210, h: 280 },
  { x:  "40vw", y:  "20vh", rotateX:  20, rotateY:  50, rotateZ: -8,  scale: 0.5, w: 190, h: 250 },
  { x: "-50vw", y: "-20vh", rotateX: -15, rotateY: -45, rotateZ:  30, scale: 0.6, w: 225, h: 295 },
];

export const PODCAST_MEDIA = [
  {
    id: "podcast-01",
    type: "video",
    src: podcast,
    label: "PODCAST REEL",
    title: "The Conversation",
    alt: "Podcast video coverage",
  },
  {
    id: "podcast-02",
    type: "image",
    src: portp5,
    label: "BEHIND THE SCENES",
    title: "On Set",
    alt: "Podcast production behind the scenes",
  },
  {
    id: "podcast-03",
    type: "video",
    src: portp7,
    label: "VIDEO COVERAGE",
    title: "In Motion",
    alt: "Podcast video clip",
  },
  {
    id: "podcast-04",
    type: "image",
    src: portp9,
    label: "CAMERA SETUP",
    title: "The Setup",
    alt: "Podcast camera setup",
  },
  {
    id: "podcast-05",
    type: "image",
    src: portp4,
    label: "PRODUCTION",
    title: "Behind The Camera",
    alt: "Podcast production",
  },
];



export const CLIENTS = [
  "EVENT COVERAGE",
  "VIDEO EDITING",
  "VIDEO PRODUCTION",
  "COLOUR GRADING",
  "CREATIVE SCRIPTING",
  "COMMERCIAL & BRAND CAMPAIGNS",
  "VISUAL STORYTELLING",
];
