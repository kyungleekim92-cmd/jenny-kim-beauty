// The Edit — hidden until lib/shop.ts has at least one complete product.
import { notFound } from "next/navigation";
import ShopView from "@/components/views/ShopView";
import { shopIsLive } from "@/lib/shop";
import { shopMetadata } from "@/lib/i18n/meta";

export const metadata = shopMetadata("ko");

export default function ShopPageKo() {
  if (!shopIsLive) notFound();
  return <ShopView lang="ko" />;
}
