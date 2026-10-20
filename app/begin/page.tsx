import BeginView from "@/components/views/BeginView";
import { beginMetadata } from "@/lib/i18n/meta";

export const metadata = beginMetadata("en");

export default function BeginPage() {
  return <BeginView lang="en" />;
}
