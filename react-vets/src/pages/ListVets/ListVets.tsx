import { gql, useQuery } from '@apollo/client';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Alert } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadVets } from '../../slice/vetsSlice';
import { AppDispatch, RootState } from '../../store';
import './ListVets.css';
import VetTable from './VetTable';

const allVetsGql = gql`
  query FindVets {
    findAllVets {
      id
      firstName
      lastName
      specialties {
        name
      }
    }
  }
`;

function ListVets() {
  const vetState = useSelector((state: RootState) => state.vets);
  const dispatch = useDispatch<AppDispatch>();

  const { error, data } = useQuery(allVetsGql);
  useEffect(() => {
    if (!data) {
      return;
    }
    dispatch(loadVets(data.findAllVets));
  }, [dispatch, data]);

  return (
    <Container className="list-vets-page">
      {error && <Alert severity="error">{error.message}</Alert>}
      <h2>
        <LocalHospitalIcon />
        Veterinarians
      </h2>
      <p className="description">Current list of veterinarians in the system</p>
      <VetTable vets={vetState.vets}></VetTable>
    </Container>
  );
}

export default ListVets;
