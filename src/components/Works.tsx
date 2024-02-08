interface WorksProps {
  title: string;
}

function Works({ title }: WorksProps) {
  return (
    <>
      <h1 id="hero">{title}</h1>
    </>
  );
}

export default Works;
