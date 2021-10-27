import { Router, Switch, Route, Redirect } from 'react-router';
import { createHashHistory } from 'history';
import styled from 'styled-components';

import './App.css';
import OverviewPage from './OverviewPage';
import DetailPage from './DetailPage';

const history = createHashHistory();

const StyledAppContainer = styled.div`
  margin: 0 10%;
`;

function App() {
  return (
    <StyledAppContainer>
      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/"
            component={OverviewPage}
          />
          <Route 
            path="/detail"
            component={DetailPage}
          />
          <Redirect to="/" />
        </Switch>
      </Router>

    </StyledAppContainer>
  );
}

export default App;
