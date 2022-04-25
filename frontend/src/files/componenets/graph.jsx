import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

var questions = [
  "Rate his/her punctuality in the class?",
  "How well does he/she organise the course?",
  "Is the syllabus complete on time?",
  "Rate his/her ability to make you understand new concepts?",
  "Rate his/her  ability to connect theory/concepts with real-world examples and applications?",
  "Does he/she  encourage critical thinking in their classes?",
  "Rate his/her interaction level in the class?",
  "Rate the quality of resources provided by him / her for the course?",
  "Does he/she encourage you to engage in various academic interests and co-curricular activities?",
  "Rate his/her ability to clarify your doubts?",
  "Does he/she try to introduce new teaching methods to make the class more engaging?",
  "Does he/she cover professional importance and course outcomes?",
];

var count = 0;
function Graph(props) {
  count++;
  var data = props.data;
  var numberArray = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i] == null) {
      numberArray.push(parseInt(0));
    } else {
      numberArray.push(parseInt(data[i]));
    }
  }
  return (
    <div>
      <div
        style={{ width: 864, alignItems: "left", margin: "auto", padding: 10 }}
      >
        <div style={{ paddingTop: 10, paddingBottom: 15 }}>
          <h4>Q{count}. {questions[count-1]}</h4>
          <h4>
            {}
            <b>Avg Score: {average(numberArray).toFixed(2)} </b>
          </h4>
          <div>
            <Bar
              data={{
                labels: ["0⭐", "1⭐", "2⭐", "3⭐", "4⭐", "5⭐"],
                datasets: [
                  {
                    data: data,
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                      "rgba(255, 206, 86, 0.2)",
                      "rgba(75, 192, 192, 0.2)",
                      "rgba(153, 102, 255, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
              width={200}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Graph;
