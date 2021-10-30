import * as React from 'react';
import './home.scss';

export class Home extends React.Component<{}, {}> {

  render() {
    return <div className="content">
      <header>
        <h1>New app</h1>
      </header>
      <section>
        Home
      </section>
      <footer>
        <a href="/about">About</a>
      </footer>
    </div>;
  }
}
