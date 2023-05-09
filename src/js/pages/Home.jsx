import React from "react";

function Home(){
    return(
        <>
            
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-6">

                        <form className="border border-secondary rounded p-3">
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
                                <button className="btn btn-primary w-50" type="submit">Save</button>
                            </div>

                        </form>  

                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;