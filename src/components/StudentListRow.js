import Axios from "axios";

function StudentListRow(props)
{
    const {_id,name,email,rollNo} = props.obj; //Object destruction
   
    const handleClick = () =>{
        Axios.delete("http://localhost:4000/studentRoute/delete-student/" + _id )
        .then((res)=>{
            if(res.status === 200){
                alert("Record deleted successfully");
                window.location.reload();
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    };
   
    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollNo}</td>
            <td></td>
        </tr>
    )
}
export default StudentListRow;
