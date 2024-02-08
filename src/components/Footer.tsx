interface FooterProps {
  title: string;
}

function Footer({ title }: FooterProps) {
  return (
    <>
      <h1 id="footer">{title}</h1>
    </>
  );
}

export default Footer;
