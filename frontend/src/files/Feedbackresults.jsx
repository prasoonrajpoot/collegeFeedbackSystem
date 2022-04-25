import React from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";
import Graph from "./componenets/graph.jsx";

function FeedbackResults(){

    var len= 0;
    var data = 0;

    // var [len , s]

    var [data, setData] = React.useState([]);

    const getTeachersData = async () => {
        var response = await axios.post("/getformresults");
        data = response.data.data;
        // console.log(data);
        len = data.length;
        setData(data);

    }


    React.useEffect(()=> {
        getTeachersData();
    }, [])

    return (
        <div >
            {data.map((single) => <Graph data = {single} ></Graph>)}
        </div>
        
    )

}

export default FeedbackResults;