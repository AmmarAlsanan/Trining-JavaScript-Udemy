import React from 'react';
import { Card, Header } from './ui';

const FirstComponent = () => {
  return (
    <React.Fragment>
      <Header />
      <div className=" justify-center flex m-4 text-center content-center">
        <Card
          image={'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'}
          title="Entire chalet hosted by Joy"
          description="12 guests5 bedrooms8 beds2.5 baths "
          prices="$3,349.05 AUD"
        />
      </div>
    </React.Fragment>
  );
};

export default FirstComponent;
