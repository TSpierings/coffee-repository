import * as React from 'react';
import './about.scss';

export class About extends React.Component<{}, {}> {

  render() {
    return <div className="content">
      <header>
        <h1>New app</h1>
      </header>
      <section>
        Blast it
      </section>
      <footer>
        <a href="/">Home</a>
      </footer>
    </div>;
  }
}
