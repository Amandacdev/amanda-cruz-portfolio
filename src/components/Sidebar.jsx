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

        <a target="_blank" href="https://drive.google.com/file/d/1acVpkPacfo53Kg0rOOvzSUFsUiHXwK78/view">
            <button className="curriculum-sidebar">Currículo</button>
          </a>
          
          <div className="position-absolute bottom-0">
          <div  class="align-items-center">
            <ul className={props.className}>{props.children}</ul>
          </div>
          <p> 2024 by Amanda</p>
        </div>
    </div>


  );
}
    /*
    <div className="sidebar">
        <img
          src="https://github.com/Amandacdev.png"
          alt="Foto de Amanda Cruz"
        ></img>

        <div className="about">
          <h3>Olá, sou Amanda!</h3>
          <h2>Desenvolvedora</h2>
        </div>

        <a target="_blank" href="https://drive.google.com/file/d/1acVpkPacfo53Kg0rOOvzSUFsUiHXwK78/view">
            <button className="curriculum-sidebar">Currículo</button>
          </a>
          
        <div className="footer">
          <div>
            <ul className={props.className}>{props.children}</ul>
          </div>
          <p> 2024 by Amanda</p>
        </div>
    </div>
    */