import React, {useState} from "react";
import confetti from "canvas-confetti";

const initialStateUser = { //Un dato de uso frecuente en el componente
    fullname: "",
    description: "",
    email: "",
    github: ""
}

function Home(){
    //Lista de usuarios
    const [allUsers, setAllUsers] = useState([
        {
            fullname: "Kelvin Ruiz",
            description: "Comenzado en la programacion",
            email: "kelvinruizdev@gmail.com",
            github: "kelvinruizdev"
        }
    ])
    
    //Usuario actual
    const [user, setUser] = useState(initialStateUser)

    //Estado para manejar errores en el formulario
    const [error, setError] = useState(false)

    //destructuracion
    const {fullname, description, email, github} = user

    //Handler onChange
    function handleChange ({target}){
        setUser({
            ...user, 
            [target.name]: target.value
        });
    }

    //Handler Submit
    function handleSubmit(event){
        
        event.preventDefault(); //Evita el burbujeo, no refresca al darle submit
        //verificar que tiene algo
        if(fullname.trim() != "" && email.trim() != "" && description.trim() != "" && github.trim() != ""){
            //tiene algo
            setAllUsers([...allUsers, user])
            setUser(initialStateUser)
            setError(false)
            confetti()
        }else{
            //no tiene nada -> error
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 5000);
        }

    }
    

    return(
        <>    
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">

                        {/*Mapear los usuarios*/}
                        {
                            allUsers.map((item, index) => {
                                return (
                                    <div key={index} className="personal-card border border-secondary rounded ">
                                        <div>
                                            <img src={`https://unavatar.io/github/${item.github}`} 
                                                alt={`Github de ${item.fullname}`}/>
                                        </div>
                                        <div>
                                            <p>{item.fullname}</p>
                                            <p>{item.email}</p>
                                            <p>{item.github}</p>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {/* Mensaje de error*/}
                        {
                            error ?
                                <div className="alert alert-danger" role="alert">
                                    All fields must be filled!
                                </div> :
                                null
                        }

                        <form onSubmit={handleSubmit} className="border border-secondary rounded p-3 mt-3" >

                            <h2 className="text-center">Fill in to create profile card</h2>

                            <div className="form-group">
                                <label className="form-label" htmlFor="fullname">Fullname:</label>
                                <input className="form-control" 
                                    id="fullname" 
                                    type="text"
                                    name="fullname"
                                    onChange={handleChange} 
                                    value={fullname}
                                />
                            </div>
                            
                            <div>
                                <label className="form-label" htmlFor="description">Description:</label>
                                <input className="form-control" 
                                    id="description" 
                                    type="textArea"
                                    name="description"
                                    onChange={handleChange}
                                    value={description} 
                                />
                            </div>

                            <div>
                                <label className="form-label" htmlFor="email">Email:</label>
                                <input className="form-control" 
                                    id="email" 
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={email} 
                                />
                            </div>

                            <div>
                                <label className="form-label" htmlFor="github">Github:</label>
                                <input className="form-control" 
                                    id="github" 
                                    type="text"
                                    name="github"
                                    onChange={handleChange} 
                                    value={github}    
                                />
                            </div>    

                            <div className="text-center pt-3">
                                <button className="btn btn-primary w-50" type="submit">Create</button>
                            </div>

                        </form>  

                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;