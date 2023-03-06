import { useLoaderData, useRevalidator } from "react-router-dom";
import { db } from "../../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import Coffee from "../Coffee/Coffee";
import NewCoffeeForm from "../NewCoffeeForm/NewCoffeeForm";

function Coffees() {
  // Router utilities
  const { coffees } = useLoaderData();
  const revalidator = useRevalidator();

  // Delete coffee and revalidate loader data

  const deleteCoffee = async (id) => {
    const coffeeDoc = doc(db, "coffees", id);
    await deleteDoc(coffeeDoc);
    revalidator.revalidate();
  };

  return (
    <div className='flex flex-col '>
      <NewCoffeeForm db={db} />
      <section className='grid grid-cols-1 gap-6 sm:grid-cols-2 p-16 lg:grid-cols-4 lg:gap-8 xl:gap-14'>
        {coffees.map((coffee) => (
          <Coffee
            key={coffee.id}
            coffee={coffee}
            db={db}
            deleteCoffee={(id) => deleteCoffee(id)}
          />
        ))}
      </section>
    </div>
  );
}

export default Coffees;
