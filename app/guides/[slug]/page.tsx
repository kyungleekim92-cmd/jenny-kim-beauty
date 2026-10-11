// One indexable page per treatment guide, e.g. /guides/botox (Korean: app/ko/guides/[slug]).
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuideView from "@/components/views/GuideView";
import { treatments } from "@/lib/treatments";
import { getTreatments } from "@/lib/i18n/content";
import { guideMetadata, guideTitle } from "@/lib/i18n/meta";

const LANG = "en";
const find = (slug: string) => getTreatments(LANG).find((t) => t.slug === slug);

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/guides/[slug]">): Promise<Metadata> {
  const t = find((await params).slug);
  return t ? guideMetadata(t, LANG) : {};
}

export default async function GuidePage({ params }: PageProps<"/guides/[slug]">) {
  const t = find((await params).slug);
  if (!t) notFound();
  return <GuideView t={t} lang={LANG} title={guideTitle(t, LANG)} />;
}
