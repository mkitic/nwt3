import React from 'react';


export class Login {

    constructor(props){
        super(props);
    }

    //prvi div-> className="base-conteiner"
    
    render(){
        return(
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <div className="header">
                    Login
                </div>
                <div className="content">
                    <div className="form"> 
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 
                        text-sm border-4 text-white py-1 px-2 rounded" 
                        type="submit">
                            Logein
                        </button>    
                
                </div>
            </div>



        )

    }

};