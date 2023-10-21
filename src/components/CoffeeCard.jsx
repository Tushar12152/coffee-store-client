import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const CoffeeCard = ({coffee,setCoffies,coffies}) => {

    const {_id,name,photo,details,category,quantity,supplier}=coffee

    const handleDelete=_id=>{
        console.log(_id)

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });

            fetch(`http://localhost:5003/coffee/${_id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount>0){
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                      });

                      const remaining=coffies.filter(cof=>cof._id!==_id)
                      setCoffies(remaining)
                }
            })


            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }





    return (

   



        <div>


               <div className="card card-side bg-base-100 shadow-xl">
  <figure><img className='w-full h-[200px]' src={photo} alt="Movie"/></figure>
  <div className="flex w-full justify-between mx-4">
    <div>
    <h2 className="card-title">{name}</h2>
    <p>{details}</p>
    <p className='font-bold text-2xl text-violet-600'>{category}</p>
    <p className='font-semibold text-2xl text-green-600'>{quantity}</p>
    <p className='font-bold text-xl text-yellow-600'>{supplier}</p>
    </div>

    <div className='mt-4'>
    <div className="btn-group btn-group-vertical gap-6">
  <button className="btn">view</button>
 <Link to={`updateCoffee/${_id}`}>
 <button className="btn">update</button>
 </Link>
  <button className="btn bg-orange-500" onClick={()=>handleDelete(_id)}>X</button>
</div>
    </div>
   
  </div>
</div>


        </div>
    );
};
CoffeeCard.propTypes={
    coffee:PropTypes.object.isRequired,
    coffies:PropTypes.object,
    setCoffies:PropTypes.object,
}

export default CoffeeCard;