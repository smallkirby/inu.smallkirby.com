import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { breadCrumbList } from '@/data/breadcrumbs';
import { BreadcrumbType } from '@/types/breadcrumb';

export default function useBreadcrumb() {
  const url = usePathname();
  const [crumbs, setCrumbs] = useState<BreadcrumbType[]>([]);

  useEffect(() => {
    const ids = url.trim().split('/');
    if (ids[ids.length - 1] === '') {
      ids.pop();
    }
    const crumbs = ids.map((id) => {
      const bread = breadCrumbList.find((bread) => bread.id === id);
      if (bread) {
        return bread;
      } else {
        return {
          id: 'unknown',
          label: '???',
          href: '/',
          icon: 'unknown',
        };
      }
    });

    setCrumbs(crumbs);
  }, [url]);

  return { crumbs };
}
