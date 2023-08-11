import useBreadcrumb from '@/hooks/breadcrumb';

export default function Breadcrumb() {
  const { crumbs } = useBreadcrumb();

  return (
    <div className="breadcrumbs text-sm">
      <ul>
        {crumbs.map((crumb, index) => {
          return (
            <li key={index} className="flex items-center">
              {crumb.icon && <div className="pr-1">{crumb.icon}</div>}
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
