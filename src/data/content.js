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
import pic from "../assets/images/pic9.jfif";
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
    tag: "DEV",
    title: "Directing & Concept",
    desc: "Treatment decks, shot lists and creative direction from a one-line brief to a locked script.",
    tools: "Treatments · Shot Lists · Storyboards",
  },
  {
    tag: "CAM",
    title: "Cinematography",
    desc: "Handheld, gimbal and locked-off work across commercial, documentary and event coverage.",
    tools: "RED · Sony Cinema Line · Prime Lenses",
  },
  {
    tag: "EDT",
    title: "Editing",
    desc: "Narrative-first cutting for brand films, docs and social — pace built around the story, not the deadline.",
    tools: "Premiere Pro · Avid · Frame.io",
  },
  {
    tag: "GRD",
    title: "Colour Grading",
    desc: "Look development and finishing that holds up across a whole campaign, not just one hero frame.",
    tools: "DaVinci Resolve · LUT Design",
  },
  {
    tag: "GEN",
    title: "AI Video & Generation",
    desc: "AI-generated plates and assets integrated into live-action timelines — used as a tool, not a shortcut.",
    tools: "Runway · Midjourney · Compositing",
  },
  {
    tag: "SOC",
    title: "Social & Content Systems",
    desc: "Cut-downs and native-format edits built for how each platform is actually watched.",
    tools: "Vertical Edits · Captioning · Reels",
  },
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
  "AURELIA SKIN",
  "NORTHBOUND",
  "STUDIO MERIDIAN",
  "FIELDNOTE",
  "LUMEN & CO",
  "GOOD HOUR",
  "PALISADE",
  "SOLSTICE LABS",
];
