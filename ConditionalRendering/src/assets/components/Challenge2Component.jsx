function Iitem({ name, importance }) {
    return (
      <li className="item">
        {name} {importance && (
          <span> (Importance: {importance})</span>
        )}
      </li>
    );
  }
  
  export default Iitem;