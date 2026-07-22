import {
  BookOpen,
  FlaskConical,
  Palette,
  Globe,
  Trophy,
  Music,
  Lightbulb,
  Users,
  ShieldCheck,
  Award,
  type LucideIcon,
} from "lucide-react";

export interface Feature {
  Icon: LucideIcon;
  title: string;
  body: string;
}

export interface Step {
  title: string;
  body: string;
}

export interface NavItem {
  href: string;
  label: string;
}

/** Primary header navigation (the "Inquire" button links to /contact separately). */
export const navItems: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/admissions", label: "Admissions" },
];

export const values: Feature[] = [
  { Icon: Lightbulb, title: "Curiosity", body: "[Placeholder — describe the first core value and why it matters to your school.]" },
  { Icon: Users, title: "Community", body: "[Placeholder — describe the second core value in a sentence or two.]" },
  { Icon: ShieldCheck, title: "Character", body: "[Placeholder — describe the third core value in a sentence or two.]" },
  { Icon: Award, title: "Excellence", body: "[Placeholder — describe the fourth core value in a sentence or two.]" },
];

export const programs: Feature[] = [
  { Icon: BookOpen, title: "[Program One]", body: "[Placeholder — a short description of this academic program or specialty.]" },
  { Icon: FlaskConical, title: "[Program Two]", body: "[Placeholder — a short description of this academic program or specialty.]" },
  { Icon: Palette, title: "[Program Three]", body: "[Placeholder — a short description of this academic program or specialty.]" },
  { Icon: Globe, title: "[Program Four]", body: "[Placeholder — a short description of this academic program or specialty.]" },
  { Icon: Trophy, title: "[Program Five]", body: "[Placeholder — a short description of this academic program or specialty.]" },
  { Icon: Music, title: "[Program Six]", body: "[Placeholder — a short description of this academic program or specialty.]" },
];

export const admissionsSteps: Step[] = [
  { title: "Register your interest", body: "[Placeholder — families share their contact details to receive updates as plans develop.]" },
  { title: "Attend an information session", body: "[Placeholder — an introductory meeting or virtual session to learn about the vision.]" },
  { title: "Submit an application", body: "[Placeholder — the application step, once enrollment formally opens.]" },
  { title: "Family conversation", body: "[Placeholder — an informal conversation to ensure the school is the right fit.]" },
  { title: "Welcome to the community", body: "[Placeholder — enrollment confirmation and onboarding for founding families.]" },
];
