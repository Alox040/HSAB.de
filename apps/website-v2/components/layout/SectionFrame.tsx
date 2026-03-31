import type { ReactNode } from "react";

type SectionFrameProps = {
  children: ReactNode;
  id?: string;
};

export default function SectionFrame({
  children,
  id,
}: SectionFrameProps): React.JSX.Element {
  return (
    <section id={id} className="py-12 sm:py-16 lg:py-20">
      {children}
    </section>
  );
}
