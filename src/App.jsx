import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/coffeeCard"
import { useState } from "react"


function App() {
  const loadedcoffies=useLoaderData()

  const [coffies,setCoffies]=useState(loadedcoffies)

  return (
    <>

      <h1 className="text-center text-purple-500  text-4xl">coffe shop :{coffies.length}</h1>
      <div className="grid grid-cols-2 mt-28 w-[90%] mx-auto gap-6">
        {
          coffies.map(coffee=><CoffeeCard key={coffee._id} coffee={coffee} coffies={coffies} setCoffies={setCoffies}></CoffeeCard>)
        }
      </div>
     
    </>
  )
}

export default App
