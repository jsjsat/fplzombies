import { useEffect, useState } from 'react';
import { ZombiesTable } from '../table/ZombiesTable';
import { OverallData } from '../../model/model';
import { Footer } from './Footer';

const enum PageState {
  loading,
  done,
  error
}

export function ZombiesPage() {

  const [data, setData] = useState<OverallData>();
  const [pageState, setPageState] = useState<PageState>(PageState.loading);

  useEffect(() => {
    // fetch zombies from json
    fetch('data.json')
    .then(response => response.json())
    .then(fetchedData => {
      setData(fetchedData as OverallData);
      setPageState(PageState.done);
    })
    .catch(error => 
      {
        console.log(error);
        setPageState(PageState.error);
      }
      );

  }, [])


  return (
    <div>
      {pageState == PageState.done && data && <ZombiesTable {...data.gameweeks[0]} />}
      {pageState == PageState.done && data && <Footer {...data} />}        
      {pageState == PageState.loading && !data && <div>Loading...</div>}
      {pageState == PageState.error && !data && <div>🚧 Something is wrong...</div>} 
    </div>
  );
}