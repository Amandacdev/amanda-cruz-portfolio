export default function ListItem(props) {
  return (
    <li>
      <a target="_blank" href={props.url}>
        <p>{props.texto}</p>
        <img src={props.imageUrl} alt={props.alt} />
      </a>
    </li>
  );
}
