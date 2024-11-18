export default function FruitRow({fruit, handleDeleteFruit}) {
    
    return (
      <>
        <tr>
            <td>{fruit.name}</td>
            <td>
                <button className="btn btn-danger" onClick={() => handleDeleteFruit(fruit.id)}>
                    <i className="fa fa-trash"></i>
                </button>
            </td>
        </tr>
      </>
    );
  }