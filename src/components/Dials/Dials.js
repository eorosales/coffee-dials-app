import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import NewDialForm from "../NewDialForm/NewDialForm";

const Dials = () => {
  const { coffeeId } = useParams();
  const { dials } = useLoaderData();

  return (
    <div>
      <h2>Dials</h2>
      <NewDialForm coffeeId={coffeeId} />
      <table>
        <thead>
          <tr>
            <th>Temperature</th>
            <th>Weight</th>
            <th>Time</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          {dials
            .filter((dial) => dial.coffee === coffeeId)
            .map((dial) => (
              <tr key={dial.id}>
                <td>{dial.temp}</td>
                <td>{dial.weight}</td>
                <td>{dial.time}</td>
                <td>{dial.volume}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dials;
