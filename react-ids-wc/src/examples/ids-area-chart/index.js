import React from 'react';
import 'ids-enterprise-wc/components/ids-area-chart/ids-area-chart';

const IdsAreaChart = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Area Chart
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-area-chart
            title="An area chart showing component usage"
            width="800"
            height="500"
            id="index-example"
          ></ids-area-chart>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsAreaChart;
