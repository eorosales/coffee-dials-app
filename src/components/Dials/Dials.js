import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import DialsTable from "../DialsTable/DialsTable";
import NewDialForm from "../NewDialForm/NewDialForm";

const Dials = () => {
  const { coffeeId } = useParams();
  const { dials } = useLoaderData();

  return (
    <div>
      <NewDialForm coffeeId={coffeeId} />
      <DialsTable dials={dials} coffeeId={coffeeId} />
    </div>
  );
};

export default Dials;
