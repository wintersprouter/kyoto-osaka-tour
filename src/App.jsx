import { useState } from "react";
import { Clock, DollarSign, MapPin } from "react-feather";
import "./App.css";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import ITINERARIES from "./data.json";
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
      <section className='my-5'>
        <ul className='timeline timeline-vertical timeline-compact'>
          {ITINERARIES[`day${selectedDay.id}`].map((item, index) => {
            return (
              <li key={`${index}`}>
                <hr />
                <div className='timeline-start'>{item.departure_time}</div>
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
                    {item.attraction === null ? (
                      <div
                        className='card card-compact bg-secondary
                  text-primary-content shadow-xl p-4'
                      >
                        <div className='card-body'>
                          <h2 className='card-title'>
                            {item.transportation.type}
                          </h2>
                          <p className='text-left'>
                            {item.transportation.description}
                          </p>
                          {item.transportation.descLists &&
                            item.transportation.descLists.map((desc, index) => (
                              <div key={index} className='my-2'>
                                <h3 className='text-lg font-semibold text-left'>
                                  {desc.listTitle}
                                </h3>
                                <ul className='list-outside list-disc'>
                                  {desc.listItem.map((list, index) => (
                                    <li key={index}>
                                      <p className='text-md text-left'>
                                        {list}
                                      </p>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                        </div>
                        <div className='card-actions justify-start items-center'>
                          {item.transportation.fee.length > 0 && (
                            <div className='badge badge-accent badge-lg'>
                              <span className='mr-2'>
                                <DollarSign size={18} />
                              </span>
                              <p className='text-lg sm:text-sm'>
                                {item.transportation.fee}
                              </p>
                            </div>
                          )}
                          {item.transportation.duration.length > 0 && (
                            <div className='badge badge-ghost badge-lg '>
                              <span className='mr-2'>
                                <Clock size={18} />
                              </span>
                              <p className='text-lg sm:text-sm'>
                                {item.transportation.duration}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className='card card-compact  bg-base-100 shadow-2xl p-4'>
                        {item.attraction.image_url && (
                          <figure>
                            <img
                              src={item.attraction.image_url}
                              alt={item.attraction.name}
                              className='rounded-xl bg-cover md:max-w-2xl'
                            />
                          </figure>
                        )}
                        <div className='card-body'>
                          <h2 className='card-title'>{item.attraction.name}</h2>
                          <p className='text-left'>
                            {item.attraction.description}
                          </p>
                          {item.attraction.descLists &&
                            item.attraction.descLists.map((desc, index) => (
                              <div key={index} className='my-2'>
                                <h3 className='text-lg font-semibold text-left'>
                                  {desc.listTitle}
                                </h3>
                                <ul className='list-outside list-disc'>
                                  {desc.listItem.map((list, index) => (
                                    <li key={index}>
                                      <p className='text-md text-left'>
                                        {list}
                                      </p>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          <div className='card-actions justify-start col items-center'>
                            <button
                              className='btn btn-sm text-pretty'
                              disabled={
                                item.attraction.location_url.length === 0
                              }
                              onClick={() => {
                                if (item.attraction.location_url.length === 0)
                                  return;
                                window.open(
                                  item.attraction.location_url,
                                  "_blank"
                                );
                              }}
                            >
                              <MapPin />
                              {item.attraction.location}
                            </button>
                            {item.attraction.fee.length > 0 && (
                              <div className='badge badge-outline badge-lg border-primary'>
                                <span className='mr-2'>
                                  <DollarSign size={18} />
                                </span>
                                {item.attraction.fee}
                              </div>
                            )}
                            {item.attraction.opening_time.length > 0 && (
                              <div className='badge badge-outline badge-lg badge-secondary'>
                                <span className='mr-2'>
                                  <Clock size={18} />
                                </span>

                                {item.attraction.opening_time}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <hr />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default App;
