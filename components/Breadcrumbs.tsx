"use client";

import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  url?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.url && { "item": `https://directtitleloans.com${item.url}` })
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="breadcrumbs">
        <ol className="breadcrumb-list">
          {items.map((item, index) => (
            <li key={index} className="breadcrumb-item">
              {item.url && index < items.length - 1 ? (
                <Link href={item.url} className="breadcrumb-link">
                  {item.label}
                </Link>
              ) : (
                <span className="breadcrumb-current">{item.label}</span>
              )}
              {index < items.length - 1 && <span className="breadcrumb-separator">/</span>}
            </li>
          ))}
        </ol>

        <style jsx>{`
          .breadcrumbs {
            padding: var(--space-4) 0;
            background-color: var(--color-bg-secondary);
          }

          .breadcrumb-list {
            display: flex;
            flex-wrap: wrap;
            gap: var(--space-2);
            list-style: none;
            max-width: var(--container-xl);
            margin: 0 auto;
            padding: 0 var(--space-6);
          }

          .breadcrumb-item {
            display: flex;
            align-items: center;
            gap: var(--space-2);
            font-size: var(--font-size-sm);
          }

          .breadcrumb-link {
            color: var(--color-text-link);
            transition: color var(--transition-fast);
          }

          .breadcrumb-link:hover {
            color: var(--color-text-link-hover);
          }

          .breadcrumb-current {
            color: var(--color-text-secondary);
          }

          .breadcrumb-separator {
            color: var(--color-text-tertiary);
          }
        `}</style>
      </nav>
    </>
  );
}
