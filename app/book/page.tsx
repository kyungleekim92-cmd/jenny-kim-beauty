import BookView from "@/components/views/BookView";
import { bookMetadata } from "@/lib/i18n/meta";

export const metadata = bookMetadata("en");

export default function BookPage() {
  return <BookView lang="en" />;
}
