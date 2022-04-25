import React from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Navbar from "./navbar.jsx";
import Graph from "./componenets/graph.jsx";

function FeedbackResults() {
  var len = 0;
  var data = 0;

  // var [len , s]

  var [data, setData] = React.useState([]);

  const getTeachersData = async () => {
    var response = await axios.post("/getformresults");
    data = response.data.data;
    // console.log(data);
    len = data.length;
    setData(data);
  };

  React.useEffect(() => {
    getTeachersData();
  }, []);

  return (
    <div>
      <Navbar />
      <div class="blue-box" style={{ width: 1000, marginBottom: 30 }}>
        <div>
          <h1>4th Semester CSE Feedback Form</h1>
          <h3>CP Section B Deep Panchani</h3>
        </div>
        {data.map((single) => (
          <Graph data={single}></Graph>
        ))}
      </div>
    </div>
  );
}

export default FeedbackResults;
