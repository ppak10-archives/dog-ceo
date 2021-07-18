/**
 * List.tsx
 * Retrieves list of available dog breeds.
 */

// Node Modules
import {useEffect} from 'react';
import {useSelector} from 'react-redux';


// Hooks
import {useBreedsAPI} from  '../hooks';

export default function List() {
  // Hooks
  const {get} = useBreedsAPI();

  const {isLoading, statusCode} = useSelector(({api}) => api.breeds);
  const breedsAll = useSelector(({breeds}) => breeds.all);

  useEffect(() => {
    get();
  }, [get]);

  // JSX
  const breedsJSX = statusCode === 200 && isLoading === false ?
    Object.keys(breedsAll).map((key) => (
      <li key={key}>{key}</li>
    ))
    : (
    <li>Loading...</li>
  );

  return (
    <div>
      <h1>Dog Breeds</h1>
      <ul>
        {breedsJSX}
      </ul>
    </div>
  );
}