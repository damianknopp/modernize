import { VETS_SVC } from '../constants';

// TODO: remove this, it is not used
const allVetsQuery = `
query {
  vets {
    id
    firstName
    lastName
    specialties {
      name
    }
  }
}`;

async function fetchVetsApi() {
  return await fetch(VETS_SVC, {
    method: 'POST',
    body: allVetsQuery,
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' }
  })
    .then((response) => response.json())
    .then((data) => data);
}

export { fetchVetsApi };
