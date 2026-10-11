import GuidesIndexView from "@/components/views/GuidesIndexView";
import { guidesIndexMetadata } from "@/lib/i18n/meta";

export const metadata = guidesIndexMetadata("en");

export default function GuidesIndex() {
  return <GuidesIndexView lang="en" />;
}
