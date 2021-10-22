import React from 'react';

import 'ids-enterprise-wc/components/ids-layout-grid';
import 'ids-enterprise-wc/components/ids-text';
import 'ids-enterprise-wc/components/ids-badge';

const IdsBadge = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Badges
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-badge>5</ids-badge>
          <ids-badge color="alert" shape="round">
            10
          </ids-badge>
          <ids-badge color="alert" shape="normal">
            10
          </ids-badge>
          <ids-badge color="error">1500</ids-badge>
          <ids-badge color="info">25k+</ids-badge>
          <ids-badge color="warning" shape="round">
            16
          </ids-badge>
          <ids-badge color="success">5</ids-badge>
          <ids-badge color="error">
            404 <ids-text audible="true">In Error Condition</ids-text>
          </ids-badge>
          <ids-badge color="alert" shape="round">
            <ids-icon icon="pending" size="normal"></ids-icon>
          </ids-badge>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsBadge;
