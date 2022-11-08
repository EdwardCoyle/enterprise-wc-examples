import React from 'react';
import 'ids-enterprise-wc/components/ids-treemap/ids-treemap';

const IdsTreemap = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Ids Treemap
          </ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>
      <ids-treemap title="Storage Utilization (78 GB)"></ids-treemap>
    </>
  );
};

export default IdsTreemap;
