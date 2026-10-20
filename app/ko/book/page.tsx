import BookView from "@/components/views/BookView";
import { bookMetadata } from "@/lib/i18n/meta";

export const metadata = bookMetadata("ko");

export default function BookPageKo() {
  return <BookView lang="ko" />;
}
