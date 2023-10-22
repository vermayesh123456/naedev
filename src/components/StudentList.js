import './main.css';
import mainbg from '../asset/bg.mp4';

function StudentList()
{
    return (
        <div>
         <div className="Main">
        <div className="video-container">
          <video className="background-video" autoPlay muted loop>
            <source src={mainbg} type="video/mp4" />
          </video>
        </div>
      </div>
            <table class="table table-bordered table-striped table-success" style={{position:"absolute" , top:"150px",width:"60vw",left:"50%",transform:"translateX(-50%)"}}>
            <thead>
                <tr>
                    <th class="text-center">Design</th>
                    <th class="text-center">Marketing</th>
                    <th class="text-center">Event Management</th>
                    <th class="text-center">Content</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td class="text-center">Yash</td>
                    <td class="text-center">Shivanshu</td>
                    <td class="text-center">Shashank</td>
                    <td class="text-center">Content</td>
                </tr>
            </tbody>
        </table>
        </div>
       
    )
}
export default StudentList;
