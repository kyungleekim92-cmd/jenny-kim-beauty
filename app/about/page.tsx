import AboutView from "@/components/views/AboutView";
import { aboutMetadata } from "@/lib/i18n/meta";

export const metadata = aboutMetadata("en");

export default function AboutPage() {
  return <AboutView lang="en" />;
}
