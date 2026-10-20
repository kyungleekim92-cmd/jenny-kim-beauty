import FaqView from "@/components/views/FaqView";
import { faqMetadata } from "@/lib/i18n/meta";

export const metadata = faqMetadata("en");

export default function FaqPage() {
  return <FaqView lang="en" />;
}
