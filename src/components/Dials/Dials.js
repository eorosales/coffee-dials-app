import { useLoaderData, useRevalidator } from "react-router-dom";
import { useParams } from "react-router-dom";
import { doc, deleteDoc } from "firebase/firestore";
import DialsTable from "../DialsTable/DialsTable";
import NewDialForm from "../NewDialForm/NewDialForm";
import { db } from "../../config/firebase";

const Dials = () => {
  const { coffeeId } = useParams();
  const { dials } = useLoaderData();
  const revalidator = useRevalidator();

  const deleteDial = async (id) => {
    const dialsDocRef = doc(db, "dials", id);
    await deleteDoc(dialsDocRef);
    revalidator.revalidate();
  };

  return (
    <div>
      <NewDialForm coffeeId={coffeeId} />
      <DialsTable
        dials={dials}
        coffeeId={coffeeId}
        deleteDial={(id) => deleteDial(id)}
      />
    </div>
  );
};

export default Dials;
