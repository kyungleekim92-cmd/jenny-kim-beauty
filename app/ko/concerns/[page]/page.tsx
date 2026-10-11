// Korean skin-concern page, e.g. /ko/concerns/acne-scars (English: app/concerns/[page]).
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ConcernView from "@/components/views/ConcernView";
import { conditions } from "@/lib/conditions";
import { getConditions } from "@/lib/i18n/content";
import { concernMetadata, concernTitle } from "@/lib/i18n/meta";

const LANG = "ko";
const find = (page: string) => getConditions(LANG).find((c) => c.page === page);

export function generateStaticParams() {
  return conditions.map((c) => ({ page: c.page }));
}

export async function generateMetadata({ params }: PageProps<"/ko/concerns/[page]">): Promise<Metadata> {
  const c = find((await params).page);
  return c ? concernMetadata(c, LANG) : {};
}

export default async function ConcernPageKo({ params }: PageProps<"/ko/concerns/[page]">) {
  const c = find((await params).page);
  if (!c) notFound();
  return <ConcernView c={c} lang={LANG} title={concernTitle(c, LANG)} />;
}
