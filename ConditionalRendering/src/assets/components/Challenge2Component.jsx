function Iitem({ name, importance }) {
    return (
      <li className="item">
        {name} {importance && (
          <i> (Importance: {importance})</i>
        )}
      </li>
    );
  }
  
  export default Iitem;