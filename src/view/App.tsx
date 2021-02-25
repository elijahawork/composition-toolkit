import React from 'react';
import Staff from './Staff';

type AppProps = {};
type AppState = {};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Staff
          staffWidth={800}
          staffHeight={100}
          timeSignature={{ numerator: 4, denominator: 4 }}
          clef="treble"
          notes={[]}
        />
      </>
    );
  }
}

export default App;
