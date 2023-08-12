export default function NormalLink({
  href,
  children,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={'text-gv-blue2 underline ' + className}
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
}
