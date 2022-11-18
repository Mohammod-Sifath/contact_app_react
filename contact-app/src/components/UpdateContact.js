import React,{useState} from 'react';
import {useNavigate,useLocation} from 'react-router-dom';

 const UpdateContact = (props) => {
    const navigate=useNavigate();
    const location=useLocation();
    const [state,setState]=useState(location.state);

    const update=(e)=>{
        e.preventDefault();
        if(state.name===""|| state.cell==="") alert("Fill all of the Information")
        props.updateContactHandler(state);
        navigate("/");
    }
  return (
    <div className="bg-[#c084fc] h-screen w-screen">
            <h2>Update---Contact</h2>
                <form className="space-y-4"  onSubmit={update}>
                    <div className=" field space-x-2 rounded-full border-solid border-orange-700 border-2">
                        <label>Name:</label>
                        <input  className="px-8" type="text" name="name" placeholder="Name" value={state.name} onChange={(e)=>setState({...state,name:e.target.value})} />
                    </div>
                    <div className="field space-x-2 rounded-full border-solid border-orange-700 border-2">
                        <label>Cell:</label>
                        <input  className="px-8" type="text" name="name" placeholder="Cell" value={state.cell} onChange={(e)=>setState({...state,cell:e.target.value})} />
                    </div>
                    <button className="rounded-full bg-gray-400 px-2 text-white">Update</button>
                </form>
        </div>
  )
}
export default UpdateContact;