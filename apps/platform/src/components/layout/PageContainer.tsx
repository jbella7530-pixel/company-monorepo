interface PageContainerProps {
  children: React.ReactNode;
}

export default function PageContainer({
  children,
}: PageContainerProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-8">
      {children}
    </section>
  );
}
