import ReactSvgCircle from '@jswork/react-svg-circle/src';
import '@jswork/react-svg-circle/src/style.scss';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(20);
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">
        Build Time: {BUILD_TIME}
      </div>
      <section className="w-60 mx-auto p-4 y-2">
        <nav className="text-center bg-gray-200 py-2 rounded-md">
          <input
            type="range"
            onChange={(e) => {
              const { value } = e.target;
              setValue(parseInt(value));
            }}
            step="1"
            min="0"
            max="100"
            value={value}
            name=""
            id=""
          />
        </nav>
        <div className="bg-green-200 p-2 rounded-md">
          <ReactSvgCircle lineWidth={6} lineCap="inherit" value={value} className="text-green-600">
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle">
              {value}%
            </text>
          </ReactSvgCircle>
        </div>
      </section>
    </div>
  );
}

export default App;
