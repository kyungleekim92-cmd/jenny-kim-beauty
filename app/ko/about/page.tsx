import AboutView from "@/components/views/AboutView";
import { aboutMetadata } from "@/lib/i18n/meta";

export const metadata = aboutMetadata("ko");

export default function AboutPageKo() {
  return <AboutView lang="ko" />;
}
