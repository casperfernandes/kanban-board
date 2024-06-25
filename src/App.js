import { Fragment, useState } from 'react';

import { GROUPING_OPTIONS, SORT_OPTIONS } from './utils/constants';

import useTicketsAndUsers from './hooks/useTicketsAndUsers';

import SwimLane from './components/SwimLane';
import Header from './components/Header';

import './App.css';

function App() {
  const [groupingKey, setGroupingKey] = useState(localStorage.getItem('grouping') || GROUPING_OPTIONS.Status);
  const [sortKey, setSortKey] = useState(localStorage.getItem('sort') || SORT_OPTIONS.Priority);

  const {
    isLoading,
    isError,
    data: { tickets, users, groups }
  } = useTicketsAndUsers({ groupingKey, sortKey });

  function handleGroupingChange(value) {
    setGroupingKey(value);
    localStorage.setItem('grouping', value);
  }

  function handleSortChange(value) {
    setSortKey(value);
    localStorage.setItem('sort', value);
  }

  if (isLoading || isError) {
    return (
      <div className="background-color flex-center vh-100">
        {isLoading ? 'Loading...' : 'Oops! Error occured while fetching data'}
      </div>
    );
  }

  if (users && tickets) {
    return (
      <div className="background-color">
        <Header
          groupingKey={groupingKey}
          setGroupingKey={handleGroupingChange}
          sortKey={sortKey}
          setSortKey={handleSortChange}
        />

        <div className="swim-lane-container">
          {Object.keys(groups).map((groupValue) => {
            const group = groups[groupValue];
  
            return (
              <Fragment key={group.label}>
                <SwimLane group={group} tickets={tickets} groupValue={groupValue} groupingKey={groupingKey} />
              </Fragment>
            )
          })}
        </div>
      </div>
    );
  }

  return null;
}

export default App;
