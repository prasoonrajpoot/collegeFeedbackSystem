import React from "react";
import axios from "axios";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
  );
  
function Feedbackresults(){
    return (
        <div class="blue-box" style={{width:1000}}>
        
            <div>
                <h1>4th Semester CSE Feedback Form</h1>
                <h3>DAA Section B Mr. Gaurav Malode</h3>
            </div>
            <div style={{width:864, alignItems:"left",margin:"auto",padding:10}}>
                <div style={{paddingTop:10,paddingBottom:15}}>
                    <h4>Q1. Rate the Punctuality of Proff Name in their class?</h4>
                    <h4><b>Avg Score: </b></h4>
                    <div>
                        <Bar 
                        data={{
                                labels:['0⭐','1⭐','2⭐','3⭐','4⭐','5⭐'],
                                datasets: [
                                    {
                                        data: [11,20,10,20,30,40],
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.2)',
                                            'rgba(54, 162, 235, 0.2)',
                                            'rgba(255, 206, 86, 0.2)',
                                            'rgba(75, 192, 192, 0.2)',
                                            'rgba(153, 102, 255, 0.2)',
                                        ],
                                        borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 206, 86, 1)',
                                        'rgba(75, 192, 192, 1)',
                                        'rgba(153, 102, 255, 1)',
                                        ],
                                        borderWidth: 1,
                                    }
                                ],
                            }      
                        } 
                        width={200} 
                        height={50}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedbackresults;