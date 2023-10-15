import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/coffeeCard"


function App() {
  const coffies=useLoaderData()
  return (
    <>

      <h1 className="text-center text-purple-500  text-4xl">coffe shop :{coffies.length}</h1>
      <div className="grid grid-cols-2 mt-28 w-[90%] mx-auto gap-6">
        {
          coffies.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
     
    </>
  )
}

export default App
