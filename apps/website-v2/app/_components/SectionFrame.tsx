import type { ReactNode } from "react";

type SectionFrameProps = {
  children: ReactNode;
};

export default function SectionFrame({
  children,
}: SectionFrameProps): React.JSX.Element {
  return <section className="w-full">{children}</section>;
}
