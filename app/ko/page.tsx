import HomeView from "@/components/views/HomeView";
import { homeMetadata } from "@/lib/i18n/meta";

export const metadata = homeMetadata("ko");

export default function HomeKo() {
  return <HomeView lang="ko" />;
}
