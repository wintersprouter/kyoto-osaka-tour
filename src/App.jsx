import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
const days = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "4",
  },
  {
    id: "5",
  },
  {
    id: "6",
  },
];

function App() {
  const [selectedDay, setSelectedDay] = useState(days[0]);

  return (
    <>
      <Navbar />
      <Tabs
        days={days}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      <section className='my-5 '>
        <ul className='timeline timeline-vertical timeline-compact'>
          <li>
            <hr />
            <div className='timeline-start'>上午5點</div>
            <div className='timeline-middle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5 text-primary'
              >
                <path
                  fillRule='evenodd'
                  d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='timeline-end'>
              <div className='container flex flex-col gap-4'>
                <div className='card card-compact bg-base-100 shadow-2xl'>
                  <div className='card-body'>
                    <h2 className='card-title'>Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className='card-actions justify-end'></div>
                  </div>
                </div>
                <div
                  className='card card-compact bg-secondary
                text-primary-content shadow-xl'
                >
                  <div className='card-body'>
                    <h2 className='card-title'>Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </li>
        </ul>
      </section>
    </>
  );
}

export default App;
