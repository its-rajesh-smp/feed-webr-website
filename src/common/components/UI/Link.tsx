export interface LinkProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

function Link(props: LinkProps) {
  const className = `${props.className} hover:underline underline-offset-2 text-xs text-primary cursor-pointer`;
  return (
    <p onClick={props.onClick} className={className}>
      {props.children}
    </p>
  );
}

export default Link;
