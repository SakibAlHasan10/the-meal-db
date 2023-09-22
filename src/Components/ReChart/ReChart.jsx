import { Link } from 'react-router-dom';
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from 'recharts';
const ReChart = () => {
    const students = [
        { "id": 1, "name": "Student 1", "math": 85, "physics": 78, "chemistry": 92 },
        { "id": 2, "name": "Student 2", "math": 92, "physics": 88, "chemistry": 90 },
        { "id": 3, "name": "Student 3", "math": 76, "physics": 80, "chemistry": 85 },
        { "id": 4, "name": "Student 4", "math": 89, "physics": 92, "chemistry": 78 },
        { "id": 5, "name": "Student 5", "math": 95, "physics": 85, "chemistry": 88 },
        { "id": 6, "name": "Student 6", "math": 78, "physics": 72, "chemistry": 70 },
        { "id": 7, "name": "Student 7", "math": 86, "physics": 90, "chemistry": 92 },
        { "id": 8, "name": "Student 8", "math": 70, "physics": 68, "chemistry": 75 },
        { "id": 9, "name": "Student 9", "math": 94, "physics": 96, "chemistry": 91 },
        { "id": 10, "name": "Student 10", "math": 82, "physics": 75, "chemistry": 80 }
      ]
    // static demoUrl = 'https://codesandbox.io/s/composed-chart-of-same-data-i67zd';
    return (
        <div>
            <h2 className='text-4xl'>ReChart</h2>
            <ResponsiveContainer width={'100%'} height={500}>
            <ComposedChart width={500} height={300} data={students} margin={{top:20, bottom:20, left:20, right:20}}>
            <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="math" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="physics" stroke="#ff7300" />
          <Line type="monotone" dataKey="chemistry" stroke="#ff45dc" />
            </ComposedChart>
            </ResponsiveContainer>
            <Link to={'/'}>
                <button className='btn bg-red-600 text-white '>home</button>
            </Link>
        </div>
    );
};

export default ReChart;