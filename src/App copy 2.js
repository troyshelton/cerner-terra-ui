import React from 'react';
import ApplicationBase from 'terra-application/lib/application-base';
import ActionHeader from 'terra-action-header';

const App = () => (
  <ApplicationBase locale="en">
    <ActionHeader
      title="Hello world"
      onBack={() => alert('You clicked back!')}
      onClose={() => alert('You clicked close!')}
    />
  </ApplicationBase>
);

export default App;