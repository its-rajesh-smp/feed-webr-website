function PageContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={`${className}  p-4`}>{children}</section>;
}

export default PageContainer;
