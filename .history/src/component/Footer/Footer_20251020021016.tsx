import  './Footer.css'
import logo from '../../assets/image/floralogo.svg'
interface Footers{
des :string;
}
const Footer:React.FC <Footers>=({des})=> {
  return (
    <div className='Footer p-x'>
      <div className='footer1'>
       <img src={logo}></img>
       <p className='desfooter f-des'>{des}</p>
      </div>
      <div className='footer2'>
        </div>
        </div>
  )
}
export default Footer
