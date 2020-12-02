import React from 'react'
import axios from 'axios'

export default function Whether() {
    const [weather, setWeather] = useState({})

useEffect(() =>{

    axios.get (
        `http://api.weatherstack.com/current?access_key=59a7b94912785acf73f0b7e890bcc2ab&query=${Country},${City}`        
        )
    .then ((res) =>{

    })
})










    return (
        <div>
            
        </div>
    )
}



return (
    <div>
        <ul>
            {
            Login
            
            ?
            <>
            <Link to = '/'>{""}<li>Home</li></Link>
            <Link to = '/SignUp'>{""}<li>SignUp</li></Link>
            <Link to ='/Login'><li>Login</li></Link>
            </>
            :
            <>

            </>
        
        
        }

        </ul>

    </div>

<NavBar bg="grey" variant="dark">
<NavBar className="container-fluid">

{
Login

?
<>
<Link to = '/'>{""}Home</Link>
<Link to = '/SignUp'>{""}SignUp</Link>
<Link to ='/Login'>Login</Link>
</>
:
<>

</>


}


</NavBar>
</NavBar>
