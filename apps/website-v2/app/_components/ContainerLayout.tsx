import type { ReactNode } from "react";

type ContainerLayoutProps = {
  children: ReactNode;
};

export default function ContainerLayout({
  children,
}: ContainerLayoutProps): React.JSX.Element {
  return <main className="mx-auto w-full max-w-6xl px-4 py-12">{children}</main>;
}
