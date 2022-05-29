import './Analytics.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';
import { db } from '../firebase';
import { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';

function Analytics() {
  const [charts, setCharts] = useState();
  const [charts2, setCharts2] = useState();
  const data = [];
  const data2 = [];

  db.collection('analytics')
    .get()
    .then((query) => {
      query.forEach((doc) => {
        data.push({
          name: doc.id,
          this_week: doc.data().this_week,
          last_week: doc.data().last_week,
        });
      });
    });
  // db.collection('analytics')
  // .get()
  // .then((query) => {
  //   query.forEach((doc) => {
  //     data.push({
  //       name: doc.id,
  //       this_week: doc.data().this_week,
  //       last_week: doc.data().last_week,
  //     });
  //   });
  // });

  console.log(data);

  //   useEffect(() => {
  //     const listener = (event) => {
  //       if (event.code === 'ArrowLeft') {
  //         moveLeft();
  //       }
  //     };

  //     document.addEventListener('keydown', listener);

  //     return () => {
  //       document.removeEventListener('keydown', listener);
  //     };
  //   }, []);

  useEffect(() => {
    setTimeout(() => {
      setCharts(
        <LineChart
          width={1700}
          height={600}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="this_week"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="last_week" stroke="#82ca9d" />
        </LineChart>
      );
    }, 500);
    setTimeout(() => {
      setCharts2();
      // <LineChart
      //   width={500}
      //   height={300}
      //   data={data2}
      //   margin={{
      //     top: 5,
      //     right: 30,
      //     left: 20,
      //     bottom: 5,
      //   }}
      // >
      //   <CartesianGrid strokeDasharray="3 3" />
      //   <XAxis dataKey="name" />
      //   <YAxis />
      //   <Tooltip />
      //   <Legend />
      //   <Line
      //     type="monotone"
      //     dataKey="this_week"
      //     stroke="#8884d8"
      //     activeDot={{ r: 8 }}
      //   />
      //   <Line type="monotone" dataKey="last_week" stroke="#82ca9d" />
      // </LineChart>
    }, 500);
  }, []);

  return (
    <div className="book">
      <div className="book__map">{charts}</div>
      <div className="book__map">{charts2}</div>
    </div>
  );
}

export default Analytics;
