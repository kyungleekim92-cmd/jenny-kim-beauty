import FaqView from "@/components/views/FaqView";
import { faqMetadata } from "@/lib/i18n/meta";

export const metadata = faqMetadata("ko");

export default function FaqPageKo() {
  return <FaqView lang="ko" />;
}
