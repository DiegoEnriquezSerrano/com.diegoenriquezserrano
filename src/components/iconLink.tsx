import Link, { LinkProps } from "next/link";

export default function IconLink(props: {
  children: React.ReactNode;
  href: LinkProps["href"];
  className: string;
}) {
  return (
    <Link className={props.className} href={props.href}>
      {props.children}
    </Link>
  );
}
