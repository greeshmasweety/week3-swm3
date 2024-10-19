import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../database/firebase.Config";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";



export default function Chatlist() {
    const [myUid, setUid] = useState('')
    const [users, setusers] = useState([])
    const navigate = useNavigate()



    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const uid = await localStorage.getItem("userId")
        setUid(uid)
        console.log(uid);


        const list = []
        const dbsnap = await getDocs(collection(db, 'user'))
        dbsnap.forEach(item => {
            list.push(item.data())
        })
        console.log("====> getusers", list);


        setusers(list)





    }
    const handlelogout = () => {
        localStorage.removeItem('userId')
        navigate('/login')

    }





    return (
        <div>
            
          
          <Navbar/>  

            
            {users.map((item, idx) => (
                <div key={idx} onClick={() => navigate('/chat', { state: { ...item, myUid } })} className="cursor-pointer w-11/12 mb-5 shadow-md border border-black bg-blue-50 shadow-gray-300 rounded-md mx-auto py-5 px-10 flex justify-between">
                    <div className="flex items-center">
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQArAMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABQIDBAYHAf/EADQQAAICAQIDBgQEBgMAAAAAAAABAgMEBRESITEGE0FRYXEiMpHBgaGx0RQVI0JSYgckQ//EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAQEBAQAAAAAAAAAAAAAAAAABERL/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAACidsIfPJL3LEs+hdHKXsgMoGF/Mav8bPov3PVqFO/OM1+CGDMBZhlUz6T29+RdTTW6A9AAAAAAAAAAAAAAAAAMPLy+6+GHOb/IC9fkV0r43zfRIj7s62xtR+Behjyk5ScpPd+bPDWIdXv4gAAAAgV13Tqe8JNengUAKkaM9NpXJRb8V0M1PdbrmiBL+NlTofN7w8iWCYBRXZGyKnB7plZFAAAAAAAAACmc1CDlLouoFjNyO5htF/G+noRLbb3ZVZY7ZuyXVvp5FJqIAAIAHjaSbbSS6t9EUegjrdd0uqbhLNq3Xk9/0MnEzcXMTeLfXbst3wy5r8AMgAEAABV/EyHRZs/kfUl4tNJp7pkCSGm3b71SfNfL7EsGeACKAAAAABganZtCNfnzZnkPnT48mfo9iwWAAVAAFRbyLq8eid101CuC3lJ+COe63reRqtrW7rxk/gqXR+svNk326zZQhj4UG0p72WeqXJL9fyNPBQqqsnTZGyqThZF/DKL2aZSCo3zszr38xj/DZTSyoR3TX/ovP3J85Ti5FmJk1ZFT+OqXEv2Op1WQuqrtr34ZxUo+z5kVWACAV1TddkZrwZQAqei04proz0x8CfFjR/15GQZUAAAAACCte9k2/GTJxkFP55e7LErwAFQAAVonbff+cQ36dytvqzXza+3mNLvMXKSbi065ej6r7/Q1Q0zQAADp2ibrSMNPr3Md/oczrhO2yNdceKc2oxXm2dVx6lRRXTHpXFR389lsSrFwAEAAASOlv+nNeTM4wNL+Wz3Rnma0AAAAABCZEeC6cfKTJsi9Rhw38XhJFgxAAVAABGNqGHVqGHZjXL4Zrk11i/BnO9U0rL0u5xyIN1/22xXwy/H7HTTxxU4uLipJ9YtdSjkv05nsYuUuGKcpf4pbv6HSrtN0lz3uxcPifXijFGTi4uJQv+pTTD1ril+ZTGudl+z9mPYs7PjwzS/pVNc16v1/c2oAgAAgAAKk9MjtQ5ecjMLWLDu6IR8UuZdMqAAAAABjZ1Xe0vb5o816mSeMCAPTJzaHTNyS+CT5ehjGmQotsrprlZdOMK4reUpPZIXWwoqnbbJRrguKUn4I57r2t3arc4puGLF/BX5+r9SiY1Ttfs3VptcZbdbrFy/Bfua5l6lm5jf8TlWzT/t4to/RcjEAQKq5zqkpVzlCS6SjJplIKJrA7T6jiSSsn/E1/wCNvN/Xr+pt2ka5h6pHaqXBdtzpn1915o5uVV2TqsjZVJxnF7qUXs0B1kEF2b1xalV3OQ0sqtc9uXGvNfcnSKF/Dq726KfRc2WNnuvUl8Ojua9n8z5slVkIAGVAAAAAAAAUW1xtg4SXJkPfTKmbjJcvB+ZNlu2qNsXGa3QHM+22pOVsdPql8EUpW7Pq/Bff6eRqpsvars1qGDlZGdzyceycpu2C5wT8JL79DWvbobjAACgAAAAAu42Rbi5Fd9EuGyt8UWdO0/Lhn4VOVVyVkd+HffZ+KOZ4eJkZ18cfEpnda+kYL8/T8TqXZLQbdIwO7zLI2WOXEox+Wv0T8ehLViTwcXh/qWLn/bF+BnAGGgAAAAAAAAAAAAB41uuhrmsdjdM1FuyuDxbn1nSkk36x6fobIAOW6h2F1bGcnjd1lw/0lwv6P9yCyNK1HGe2RgZVe3WUqZbfXbY7eeF1McIcJLrGS/Arqx77Xw00W2PyhBv9Dubin1Sfuel6Mcew+y+tZjXd6fdBPxuXd/rz/I2TTP8Aj57xs1TL3261ULbf3k/sjfgTTGHp2m4em091hY0KY+PCucvd9WZgBFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k=" className=" w-16 mr-4 rounded-full border-2 border-gray-500" />
                        <div>
                            <h1 className=" uppercase font-semibold text-xl">{ item.name}</h1>
                            <h1 className=" text-gray-600">{item.email}</h1>
                        </div>
                    </div>
                    <button>Message</button>
                </div>
            ))}


        </div>



    )
}

