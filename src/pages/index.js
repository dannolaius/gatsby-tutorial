import * as React from 'react';
import Counter from '../components/Counter';

const IndexPage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Counter />
      <p>im deploooooyed!</p>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

