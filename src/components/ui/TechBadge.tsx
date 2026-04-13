interface TechBadgeProps {
  name: string;
}

export function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-mono text-accent">
      {name}
    </span>
  );
}
