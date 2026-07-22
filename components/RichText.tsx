import { stripMarkdown } from '@/utils/format';

export function RichText({ content }: { content: string }) {
  return (
    <div className="space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
      {content
        .split(/\n\s*\n/)
        .filter(Boolean)
        .map((paragraph, index) => (
          <p key={`${paragraph.slice(0, 24)}-${index}`}>{stripMarkdown(paragraph)}</p>
        ))}
    </div>
  );
}
