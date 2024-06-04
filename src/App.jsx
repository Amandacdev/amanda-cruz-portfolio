import './App.css';
import Sidebar from "./components/Sidebar";
import Section from "./components/Section";
import ListItem from "./components/ListItem";


const projectsListData = [
  {
    url: "https://amandacdev.github.io/Site-Cafeteria-JS/",
    imageUrl:
      "https://static.wixstatic.com/media/3b716f_04b7c9ccc28841c6a19974ec0caf52db~mv2.jpg/v1/fill/w_872,h_620,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/3b716f_04b7c9ccc28841c6a19974ec0caf52db~mv2.jpg",
    alt: "Imagem de morango com chocolate",
  },
  {
    url: "https://github.com/Amandacdev/booklog",
    imageUrl:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Imagem de biblioteca",
  },
];

const contactsListData = [
  {
    url: "https://github.com/Amandacdev",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg",
    alt: "Imagem da logo do GitHub",
  },
  {
    url: "https://www.linkedin.com/in/amandacrz/",
    imageUrl:
      "https://e7.pngegg.com/pngimages/802/636/png-clipart-social-media-computer-icons-linkedin-logo-social-media-text-business.png",
    alt: "Imagem da logo do linkedin",
  },
  {
    url: "mailto:amanda10jp@gmail.com.br",
    imageUrl:
      "https://i.pinimg.com/564x/cf/c4/b6/cfc4b6c572448f1f5996b98b29a8ea44.jpg",
    alt: "Icon email",
  },
];

const technologiesListData = [
  {
    url:"https://developer.mozilla.org/en-US/docs/Glossary/HTML",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    alt: "Imagem da logo do HTML",
  },
  {
    url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    imageUrl:
      "https://static-00.iconduck.com/assets.00/file-type-css-icon-1806x2048-r5fwjl3p.png",
    alt: "Imagem da logo do css",
    texto: "CSS",
  },
  {
    url: "https://www.javascript.com/",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    alt: "Imagem da logo do JavaScript",
  },
  {
    url: "https://react.dev/",
    imageUrl: "https://icon-library.com/images/react-icon/react-icon-29.jpg",
    alt: "Imagem da logo do React",
  },
  {
    url: "https://www.mysql.com/",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png",
    alt: "Imagem da logo do MySQL",
  },
  {
    url:"https://www.python.org/",
    imageUrl: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
    alt: "Imagem da logo do Phython",
  },
  {
    url:"https://vitejs.dev/",
    imageUrl: "https://vitejs.dev/logo.svg",
    alt: "Imagem da logo do Vite",
  },
  
];

const idiomasListData = [ 
  {
    texto: "Inglês: Intermediário/avançado."
  },
  {
    texto: "Português: Nativo."
  }
];

const aboutMe = [
  {
    imageUrl:
      "https://camo.githubusercontent.com/4787a8d7a12dc311a84b200355b26d6dc690cecb48a3bff68a109a26a36907f0/68747470733a2f2f692e6962622e636f2f484b324c5a59422f796f75722d696d6167652e6a7067",
    alt: "Imagem de avatar",
  },
];

export default function App() {
  return (
    <div>
      <div className="reading-indicator"></div>

      <Sidebar className="contacts-list">
        {contactsListData.map(function (item) {
          return (
            <ListItem url={item.url} imageUrl={item.imageUrl} alt={item.alt} />
          );
        })}
      </Sidebar>

      <main>
        <Section title="Sobre Mim" className="about-me">
          <div>
            <p>Olá! Sou uma desenvolvedora em formação pelo curso de Sistemas para Internet (IFPB).</p> 
            <p>Sou uma pessoa muito curiosa que adora aprender novas tecnologias e buscar soluções para problemas. Graduada em Biotecnologia, tenho experiência em administração de projetos, gestão de pessoas e liderança. Tenho um nível avançado de inglês e sou principalmente
            interessada em <span>desenvolvimento de sistemas</span> e <span>análise de dados.</span> 💙👩‍💻</p> 
            <p>Estou aberta à oportunidades de estágio nessas áreas.</p>
          </div>
                    
          <a target="_blank" href="https://drive.google.com/file/d/1acVpkPacfo53Kg0rOOvzSUFsUiHXwK78/view">
            <button className="button-curriculum">Currículo</button>
          </a>

          {aboutMe.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section
          title="Projetos"
          subtitle="Os projetos que mais gostei de desenvolver ✨"
          className="projects-list"
        >
          {projectsListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
                texto={item.texto}
              />
            );
          })}
          <a
            target="_blank"
            href="https://github.com/Amandacdev?tab=repositories"
          >
            <button className="button-projects">Ver Projetos</button>
          </a>
        </Section>

        <Section title="Tecnologias" className="technologies-list">
          {technologiesListData.map(function (item) {
            return (
              <ListItem
                url={item.url}
                imageUrl={item.imageUrl}
                alt={item.alt}
              />
            );
          })}
        </Section>

        <Section title="Idiomas" className="idiomas-list">
          {idiomasListData.map(function (item) {
            return (
              <ListItem
                texto={item.texto}
              />
            );
          })}
        </Section>
      </main>
    </div>
  );
}