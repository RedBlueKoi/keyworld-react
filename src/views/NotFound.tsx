import { FC } from "react"
import './NotFound.css';

const NotFound: FC = () => {

  

  return (
 <body >
  <div >
  <div className="error404">Error 404</div>
  <div className="errortext"> <span>Oh no! It seems that the page you were trying to look for doesn’t exist!
   <br/>Please try again later or start over from the </span><a href='/' className="errorhomepageword"  >Homepage</a></div>

  </div>
  </body>
  )
}

export default NotFound
