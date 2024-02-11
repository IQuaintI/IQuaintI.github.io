import staticImage from '../../public/staticImage.jpg'


interface HeaderProps {
  title: string;
  subtitle?: string;
}

function Header({ title, subtitle }: HeaderProps) {
  return (
    <>
      <div id="staticImage" style={{ backgroundImage: `url(${staticImage})` }}></div>
      <h1 className="header-title">{title}</h1>
      {subtitle && <h3 className="header-subtitle">{subtitle}</h3>}
    </>
  );
}


export default Header;
