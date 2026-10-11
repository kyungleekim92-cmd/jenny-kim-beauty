// One page per skin concern, e.g. /concerns/acne-scars (Korean: app/ko/concerns/[page]).
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ConcernView from "@/components/views/ConcernView";
import { conditions } from "@/lib/conditions";
import { getConditions } from "@/lib/i18n/content";
import { concernMetadata, concernTitle } from "@/lib/i18n/meta";

const LANG = "en";
const find = (page: string) => getConditions(LANG).find((c) => c.page === page);

export function generateStaticParams() {
  return conditions.map((c) => ({ page: c.page }));
}

export async function generateMetadata({ params }: PageProps<"/concerns/[page]">): Promise<Metadata> {
  const c = find((await params).page);
  return c ? concernMetadata(c, LANG) : {};
}

export default async function ConcernPage({ params }: PageProps<"/concerns/[page]">) {
  const c = find((await params).page);
  if (!c) notFound();
  return <ConcernView c={c} lang={LANG} title={concernTitle(c, LANG)} />;
}
