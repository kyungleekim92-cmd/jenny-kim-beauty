import GuidesIndexView from "@/components/views/GuidesIndexView";
import { guidesIndexMetadata } from "@/lib/i18n/meta";

export const metadata = guidesIndexMetadata("ko");

export default function GuidesIndexKo() {
  return <GuidesIndexView lang="ko" />;
}
