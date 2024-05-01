export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="bck">
        <img
          src="https://github.com/Amandacdev.png"
          alt="Foto de Amanda Cruz"
        ></img>
        <div className="about">
          <h2>Olá, sou Amanda!</h2>
          <h3>Desenvolvedora.</h3>

          <ul className="contacts">
            <li><a target="_blank" href="https://www.linkedin.com/in/amandacrz/">
                  <button>Currículo</button>
                </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/amandacrz/">
                <button>Projetos</button>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/amandacrz/">
                <button>Email</button>
              </a>
            </li>
          </ul>

        </div>
        <div className="footer">
          <div>
            <ul className={props.className}>{props.children}</ul>
          </div>
          <p> 2024 by Amanda</p>
        </div>
      </div>
    </div>
  );
}
