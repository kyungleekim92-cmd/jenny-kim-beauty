import HomeView from "@/components/views/HomeView";
import { homeMetadata } from "@/lib/i18n/meta";

export const metadata = homeMetadata("en");

export default function Home() {
  return <HomeView lang="en" />;
}
