import React from 'react';
import Header from './Header';
import EventPreview from './EventPreview'

class App extends React.Component {
  state = {
    pageHeader: 'Chronos app'
  };
  componentDidMount() {

  }
  componentWillUnmount() {

  }
  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.props.eventsList.map(eventX =>
            <EventPreview {...eventX} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
