import { Router, Switch, Route, Redirect } from 'react-router';
import { createHashHistory } from 'history';
import styled from 'styled-components';

import OverviewPage from './Overview/OverviewPage';
import DetailPage from './Detail/DetailPage';
import Header from './Header';

const history = createHashHistory();

const StyledAppContainer = styled.div`
  margin: 0 10%;
  background-color: white;
  height: 100vh;
`;

function App() {
  return (
    <StyledAppContainer>
      <Header />
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
