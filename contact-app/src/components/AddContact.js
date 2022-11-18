import React,{useState} from "react";
import {Link,useNavigate} from "react-router-dom";

const AddContact = (props) => {
    const navigate=useNavigate();
    const [state,setState]=useState({name:"",cell:""});
    const add=(e)=>{
        e.preventDefault();
        if(state.name===""|| state.cell==="") alert("Fill all of the Information")
        props.addContactHandler(state);
        console.log(state);
        setState({name:"",cell:""});
        navigate("/");
       
    }
  return (
    <div className="bg-[#c084fc] w-screen h-screen">
            <h2>AddContact</h2>
            <Link to="/">
                <button>Contact List</button>
            </Link>
                <form className="ui form"  onSubmit={add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={state.name} onChange={(e)=>setState({...state,name:e.target.value})} />
                    </div>
                    <div className="field">
                        <label>Cell</label>
                        <input type="text" name="name" placeholder="Cell" value={state.cell} onChange={(e)=>setState({...state,cell:e.target.value})} />
                    </div>
                    <button>Add</button>
                </form>
        </div>
  )
}
export default AddContact;




// class AddContact extends React.Component{
//     state={
//         name:"",
//         cell:""
//     };
//     add=(e)=>{
//         e.preventDefault();
//         if (this.state.name==="" || this.state.cell===""){
//             alert("all the fields are nedded");
//             return;
//         }
//         this.props.addContactHandler(this.state);
//         this.setState({name:"",cell:""});
//     }
// render(){
//     return(
        // <div className="ui main">
        //     <h2>AddContact</h2>
        //     <Link to="/">
        //         <button>Contact List</button>
        //     </Link>
        //         <form className="ui form" onSubmit={this.add}>
        //             <div className="field">
        //                 <label>Name</label>
        //                 <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
        //             </div>
        //             <div className="field">
        //                 <label>Cell</label>
        //                 <input type="text" name="name" placeholder="Cell" value={this.state.cell} onChange={(e)=>this.setState({cell:e.target.value})} />
        //             </div>
        //             <button>Add</button>
        //         </form>
        // </div>
//     )
// }
// }