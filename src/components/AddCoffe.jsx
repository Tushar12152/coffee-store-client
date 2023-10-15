import swal from 'sweetalert';



const AddCoffe = () => {
   const handleAddCoffee=e=>{
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

    fetch('http://localhost:5003/coffee',{
        method:"POST",

        headers: {
            "Content-Type": "application/json",
           
          },

          body:JSON.stringify(newCoffee)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.insertedId){
            swal("success!", "your data is subitted successfully in your database", "success");

        }
    })


   }

    return (
        <div className="bg-[#F4F3F0] ">
             <h1 className="text-center text-4xl">Add a coffee</h1>

            <form onSubmit={handleAddCoffee}>

                <div className="md:flex gap-4 w-[50%] mx-auto">
                <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Coffee Name</span>
                </label>
                    <label className="input-group">
                         <input name="name" type="text" placeholder="Coffee name" className="input input-bordered w-full" />
                    </label>
                </div>

                <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Available Quantity</span>
                </label>
                    <label className="input-group">
                    
                        <input name="quantity" type="text" placeholder="Available Quantity" className="input input-bordered w-full" />
                    </label>
                </div>

                </div>


                <div className="md:flex gap-4 w-[50%] mx-auto">
                <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Supplier</span>
                </label>
                    <label className="input-group">
                    
                        <input name="supplier" type="text" placeholder="Supplier" className="input input-bordered w-full" />
                    </label>
                </div>

                <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Taste</span>
                </label>
                    <label className="input-group">
                    
                        <input name="taste" type="text" placeholder="Taste" className="input input-bordered w-full" />
                    </label>
                </div>

                </div>


                <div className="md:flex gap-4 w-[50%] mx-auto">
                <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Category</span>
                </label>
                    <label className="input-group">
                    
                        <input name="category" type="text" placeholder="Category" className="input input-bordered w-full" />
                    </label>
                </div>

                <div className="form-control md:w-1/2">
        <label className="label">
            <span className="label-text">Details</span>
                </label>
                    <label className="input-group">
                    
                        <input name="details" type="text" placeholder="Details" className="input input-bordered w-full" />
                    </label>
                </div>

                </div>




                <div className="w-[50%] mx-auto">
                <div className="form-control w-full">
        <label className="label">
            <span className="label-text">PhotoUrl</span>
                </label>
                    <label className="input-group">
                    
                        <input name="photo" type="text" placeholder="PhotoUrl" className="input input-bordered w-full" />
                    </label>
                </div>
                </div>
                  
              
                 <input type="submit" value="Add a Coffee" className="btn  w-[50%] mx-auto ml-[340px]" />
             

            </form>
        </div>
    );
};

export default AddCoffe;