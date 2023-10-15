import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UodateCoffe = () => {
    const updatedCoffee=useLoaderData()
    const {_id,name,photo,details,category,quantity,supplier}=updatedCoffee


    const handleUpdateCoffee=e=>{
        e.preventDefault()
        const form=e.target;
    
        const name=form.name.value;
        const quantity=form.quantity.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photo=form.photo.value;
    
        const newCoffee={name,quantity,supplier,taste,category,details,photo}
        console.log(newCoffee)
    
        fetch(`http://localhost:5003/coffee/${_id}`,{
            method:"PUT",
    
            headers: {
                "Content-Type": "application/json",
               
              },
    
              body:JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedData){
                swal("success!", "your data is updated successfully in your database", "success");
    
            }
        })
    
    
       }

    return (
        <div className="bg-[#F4F3F0] ">
        <h1 className="text-center text-4xl">Update a coffee : {name} To</h1>

       <form onSubmit={handleUpdateCoffee}>

           <div className="md:flex gap-4 w-[50%] mx-auto">
           <div className="form-control md:w-1/2">
   <label className="label">
       <span className="label-text">Coffee Name</span>
           </label>
               <label className="input-group">
                    <input name="name" type="text" placeholder="Coffee name" defaultValue={name} className="input input-bordered w-full" />
               </label>
           </div>

           <div className="form-control md:w-1/2">
   <label className="label">
       <span className="label-text">Available Quantity</span>
           </label>
               <label className="input-group">
               
                   <input name="quantity" type="text" placeholder="Available Quantity" defaultValue={quantity} className="input input-bordered w-full" />
               </label>
           </div>

           </div>


           <div className="md:flex gap-4 w-[50%] mx-auto">
           <div className="form-control md:w-1/2">
   <label className="label">
       <span className="label-text">Supplier</span>
           </label>
               <label className="input-group">
               
                   <input name="supplier" type="text" placeholder="Supplier" defaultValue={supplier} className="input input-bordered w-full" />
               </label>
           </div>

           <div className="form-control md:w-1/2">
   <label className="label">
       <span className="label-text">Taste</span>
           </label>
               <label className="input-group">
               
                   <input name="taste" type="text" placeholder="Taste"  defaultValue={category } className="input  input-bordered w-full" />
               </label>
           </div>

           </div>


           <div className="md:flex gap-4 w-[50%] mx-auto">
           <div className="form-control md:w-1/2">
   <label className="label">
       <span className="label-text">Category</span>
           </label>
               <label className="input-group">
               
                   <input name="category" type="text" placeholder="Category" defaultValue={category} className="input input-bordered w-full" />
               </label>
           </div>

           <div className="form-control md:w-1/2">
   <label className="label">
       <span className="label-text">Details</span>
           </label>
               <label className="input-group">
               
                   <input name="details" type="text" placeholder="Details" defaultValue={details} className="input input-bordered w-full" />
               </label>
           </div>

           </div>




           <div className="w-[50%] mx-auto">
           <div className="form-control w-full">
   <label className="label">
       <span className="label-text">PhotoUrl</span>
           </label>
               <label className="input-group">
               
                   <input name="photo" type="text" placeholder="PhotoUrl" defaultValue={photo} className="input input-bordered w-full" />
               </label>
           </div>
           </div>
             
         
            <input type="submit" value="Update a Coffee" className="btn  w-[50%] mx-auto ml-[340px]" />
        

       </form>
   </div>
    );
};

export default UodateCoffe;