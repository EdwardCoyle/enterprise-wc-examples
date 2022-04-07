import React from 'react';

const IdsRating = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Rating (4/5 stars)
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-rating value="4"></ids-rating>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h2">
          Rating (3.5/5 Stars)
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-rating value="3.5" readonly="true"></ids-rating>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsRating;
