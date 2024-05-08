export default function Sidebar(props) {
  return (
    <div className="sidebar">
        <img
          src="https://github.com/Amandacdev.png"
          alt="Foto de Amanda Cruz"
        ></img>

        <div className="about">
          <h3>Olá, sou Amanda!</h3>
          <h2>Desenvolvedora</h2>
        </div>

        <a target="_blank" href="/amanda-cruz-portfolio/src/assets/curriculo-Amanda-Cruz-de-Araujo.pdf">
            <button className="curriculum-sidebar">Currículo</button>
        </a>

        <div className="footer">
          <div>
            <ul className={props.className}>{props.children}</ul>
          </div>
          <p> 2024 by Amanda</p>
        </div>
    </div>
  );
}
