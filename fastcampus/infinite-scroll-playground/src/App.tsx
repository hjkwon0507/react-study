import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

interface Airline {
  id: number;
  name: string;
  country: string;
  logo: string;
  slogan: string;
  head_quaters: string;
  website: string;
  established: string;
}

interface Passenger {
  _id: string;
  name: string;
  trips: number;
  airline: Airline;
  __v: number;
}

function App() {
  const listRef = useRef(null);
  const currentPageRef = useRef<number>(0);

  const [passengers, setPassengers] = useState<Array<Passenger>>([]);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [isScrollBottom, setIsScrollBottom] = useState<boolean>(false);

  const getPassengers = async(init?: boolean) => {
    const params = { page: 0, size: 10 };

    try {
      const response = await axios.get('https://api.instantwebtools.net/v1/passenger')

      const passengers = response.data.data;
      const isLast = response.data.totalPages === currentPageRef.current;

      init ? setPassengers(passengers) : setPassengers(prev => [...prev, ...passengers]);
      setIsLast(isLast);
    } catch (e) {
      console.error(e);
    }
  }

  const handleScroll = () => {
    if (listRef.current) {
      const { scrollHeight, offsetHeight, scrollTop } = listRef.current;

      const offset = 50;

      setIsScrollBottom(scrollHeight - offsetHeight - scrollTop < offset);
    }
  }

  useEffect(() => {
    if (isScrollBottom) {
      currentPageRef.current += 1;

      !isLast && getPassengers();
    }
  }, [isScrollBottom, isLast]);

  useEffect(() => {
    getPassengers(true);
  }, []);

  return (
    <div className="App">
      <ul ref={listRef} className="list" onScroll={handleScroll}>
        {
          passengers.map(passengers => (<li className="list" key={passengers._id}>{passengers.name}</li>))  
        }
      </ul>
    </div>
  );
}

export default App;
