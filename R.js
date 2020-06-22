import React from "react";
import data from "./data/data.json";
import profileicon from './woman.svg';
import profileicon1 from './medical-mask.svg';
let R=(prop)=>{
    let info=data.profiles[prop.loacation.data.id]; 
    return(
        <div className="row justify-content-centre">
            <div className="col-lg-3 m-2">
                <div className="card-body p-2 text-center">
                {info.basics.Role==="Writer" ? <img src={profileicon} alt="Profile Icon" style={{width:"30%"}}/> : <img src={profileicon1} alt="Profile Icon" style={{width:"30%"}}/>}
                    <div className="class shadow">
    <h2>{info.basics.name}</h2>
    <h5 className="text-secondary" style={{fontStyle:"italic"}}>{info.basics.Role}</h5><hr />
        <a href={"mailto:"+info.basics.email}>{info.basics.email}</a>
        <br/>
        <a href={"tel:"+info.basics["Mobile no."]}>{info.basics["Mobile no."]}    </a> < br />
    <p>{info.basics.Address}</p>

                    </div>
                    </div>
                    </div>

                    <div className="col-lg-8 m-2">
                 
                    <div className="class shadow">
                        <div className="card-body">
                            <h3>summary</h3><hr />
                            <ul>
                                {info.summary.map((summaryValue,summaryIndex)=>(
                                    <li key={summaryIndex}>{summaryValue}</li>
                                ))}
                            </ul>
                            <h3>Educational Qualifications:</h3>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>qualification</th>
                                            <th>institution</th>
                                            <th>percentage</th>
                                        </tr>

                                    </thead>

                                </table>
                            </div>

                        </div>
                    
                    
                    

                </div>

            </div>

        </div>
    )
}


export default R;



