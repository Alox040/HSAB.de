interface ContentContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentContainer({
  children,
  className = "",
}: ContentContainerProps): React.JSX.Element {
  return (
    <div className={`site-shell ${className}`}>
      {children}
    </div>
  );
}
