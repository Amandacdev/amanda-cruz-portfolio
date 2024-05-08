export default function Section(props) {
  return (
    <section>
      <div>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
        <ul className={props.className}>{props.children}</ul>
      </div>
    </section>
  );
}

/*
Algun conceitos interessantes utilizados:
 - Props: é um objeto JavaScript que traz title e subtitle! Para usar o props dentro do JSX usamos {}, visto que queremos inserir um conteúdo JS no nosso código JSX. Observe que utilizamos ele no componente Section.js

 - Um atributo target com o valor de _blank abre o documento vinculado em uma nova janela ou aba.
*/
