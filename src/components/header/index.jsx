import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import ChartContext from '../../utils/chartContext'
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';

import { Container, Nav, Logo, Form } from './styles';

function Header() {
  const {search, setSearch} = useContext(ChartContext);
  const history = useHistory();

  const handleChange = e => {
    setSearch(e.target.value);
  }

  function goToNewChart() {
    history.push("/newChart")
  }

  return (
    <Container>
      <Nav>
        <Logo>
          Logo
        </Logo>
        <Form noValidate autoComplete="on">
          <TextField 
            variant="filled"
            fullWidth 
            type="text" 
            label="Search..."
            value={search}
            onChange={handleChange}
          />
        </Form>
        <Fab color="primary" size="small" className="buttonAdd" aria-label="add" onClick={goToNewChart} >
          <AddIcon />
        </Fab>
      </Nav>
    </Container>
  );
};

export default Header;
