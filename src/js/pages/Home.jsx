import React, {useState} from "react";

function Home(){
    //Lista de usuarios
    const [allUsers, setAllUsers] = useState([
        {
            fullname: "Kelvin Ruiz",
            description: "Comenzado en la programacion",
            email: "kelvinruizdev@gmail.com",
            github: "kelvinruizdev"
        }
    ]);
    
    //Usuario actual
    const [user, setUser] = useState({
        fullname: "",
        description: "",
        email: "",
        github: ""
    });
    

    return(
        <>
            
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">

                        {/*Mapear los usuarios*/}
                        {
                            allUsers.map((item, index)=>{
                                return (
                                    <div className="personal-card border border-secondary rounded ">
                                        <div>
                                            <img src="https://avatars.githubusercontent.com/u/91167188?v=4" alt="Github Avatar"/>
                                        </div>
                                        <div>
                                            <p>Fullname</p>
                                            <p>Email</p>
                                            <p>Github</p>
                                            <p>Description</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <form className="border border-secondary rounded p-3 mt-3">

                            <h2 className="text-center">Fill in to create profile card</h2>

                            <div className="form-group">
                                <label className="form-label" htmlFor="fullname">Fullname:</label>
                                <input className="form-control" id="fullname" type="text"></input>
                            </div>
                            
                            <div>
                                <label className="form-label" htmlFor="description">Description:</label>
                                <input className="form-control" id="description" type="textArea"></input>
                            </div>

                            <div>
                                <label className="form-label" htmlFor="email">Email:</label>
                                <input className="form-control" id="email" type="email"></input>
                            </div>

                            <div>
                                <label className="form-label" htmlFor="github">Github:</label>
                                <input className="form-control" id="github" type="text"></input>
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