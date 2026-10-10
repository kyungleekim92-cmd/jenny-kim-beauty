import Reveal from "./Reveal";

/* Stand-in for real photography. Replace with final images:
   - Portraits: 4:5, warm desaturated grade, partial face crops, no stock smiles
   - Texture/macro: skin, water, stone in soft light
   - Interiors: calm, minimal, warm neutrals */
export function PlaceholderImage({
  ratio = "ph-45",
  label,
  spec,
  dark = false,
}: {
  ratio?: string;
  label: string;
  spec: string;
  dark?: boolean;
}) {
  return (
    <div className={`ph ${ratio}`} data-dark={dark}>
      <div className="ph-label">
        <strong>{label}</strong>
        <span>{spec}</span>
      </div>
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lede,
  center = false,
  bronzeEyebrow = false,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  center?: boolean;
  bronzeEyebrow?: boolean;
}) {
  return (
    <Reveal className={center ? "center" : ""}>
      <p className={`eyebrow${bronzeEyebrow ? " bronze" : ""}`}>{eyebrow}</p>
      <h2 className="display-sm mt-2">{title}</h2>
      {lede && <p className="lede mt-2">{lede}</p>}
      <div className="divider-bronze" />
    </Reveal>
  );
}
