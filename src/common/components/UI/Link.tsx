export interface LinkProps {
  className?: string;
  children?: React.ReactNode;
}

function Link(props: LinkProps) {
  const className = `${props.className} hover:underline underline-offset-2 text-xs text-primary cursor-pointer`;
  return <p className={className}>{props.children}</p>;
}

export default Link;
