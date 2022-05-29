import './Analytics.css';
import { Bar } from 'react-chartjs-2';
import { BarChart } from '../Components/BarChart';

function Analytics() {
  const data = {
    labels: ['Red', 'Orange', 'Blue'],
    datasets: [
      {
        label: 'Popularity of colours',
        data: [55, 23, 96],
        backgroundColor: [
          'rgba(255, 255, 255, 0.6)',
          'rgba(255, 255, 255, 0.6)',
          'rgba(255, 255, 255, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };

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

  return (
    <div className="book">
      <div className="book__map">
        <BarChart chartData={data} />
      </div>
    </div>
  );
}

export default Analytics;
