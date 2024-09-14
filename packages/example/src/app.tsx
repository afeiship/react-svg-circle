import { ReactSvg, ReactCircle } from '@jswork/react-svg-circle/src/main';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(20);
  return (
    <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
      <div className="badge badge-warning absolute right-0 top-0 m-4">
        Build Time: {BUILD_TIME}
      </div>
      <section className="w-100 mx-auto p-4 y-2">
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
        <div className="border rounded p-5">
          <ReactSvg width="100" height="100" className="size-full">
            <ReactCircle thickness={8} value={100} color="#dde" fill="green" />
          </ReactSvg>
        </div>
        <div
          className="*:rounded grid grid-cols-2 gap-4 p-2 border border-blue-100 rounded-lg bg-slate-50 hover:bg-slate-100 transition-all">
          <ReactSvg width="100" height="100" className="size-full">
            <ReactCircle thickness={8} value={100} color="#dde" />
            <ReactCircle thickness={5} value={100} radius={36} color="orange" />
            <ReactCircle thickness={3} color="green" value={value} />
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle">
              {value}%
            </text>
          </ReactSvg>
          <ReactSvg width="100" height="100" className="size-full">
            <ReactCircle thickness={10} value={100} color="#ddd" />
            <ReactCircle thickness={10}
                         colorRotate={90}
                         lineCap="round"
                         colors={[
                           { value: '#007aff', offset: 0 },
                           { value: '#ff5722', offset: 100 },
                         ]}
                         value={value}
            />
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle">
              {value}%
            </text>
          </ReactSvg>
        </div>
      </section>
    </div>
  );
}

export default App;
