import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; path: string }[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className="flex items-center text-on-surface-variant font-label-sm text-xs tracking-widest uppercase mb-8">
      {items.map((item, index) => (
        <div key={item.path} className="flex items-center">
          <Link
            to={item.path}
            className={`hover:text-primary-fixed transition-colors ${
              index === items.length - 1 ? 'text-on-background font-bold' : ''
            }`}
          >
            {item.label}
          </Link>
          {index < items.length - 1 && (
            <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          )}
        </div>
      ))}
    </nav>
  );
};
