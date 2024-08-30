export default function MoviePage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <main>
      <article>{id}</article>
    </main>
  );
}
