import useBreadcrumb from '@/hooks/breadcrumb';

export default function Breadcrumb() {
  const { crumbs } = useBreadcrumb();

  return (
    <div className="breadcrumbs text-xs md:text-sm">
      <ul>
        {crumbs.map((crumb) => {
          return (
            <li key={crumb.id} className="flex items-center">
              {crumb.icon && (
                <div className="py-auto my-auto pr-1">{crumb.icon}</div>
              )}
              <div>
                <a href={crumb.href}>{crumb.label}</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
