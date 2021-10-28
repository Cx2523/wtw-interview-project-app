import React from 'react';
import { withRouter } from 'react-router';

const EditButton = ({personId, history}) => 
  <button onClick={() => history.push(`/detail/${personId}`)}>Edit</button>;

export default withRouter(EditButton);
