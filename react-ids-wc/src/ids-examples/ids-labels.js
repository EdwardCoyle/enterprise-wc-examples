import React from 'react';

import 'ids-enterprise-wc/ids-layout-grid/ids-layout-grid.js';
import 'ids-enterprise-wc/ids-label/ids-label.js';

function IdsLabels() {
  return (
    <React.Fragment>
      <ids-layout-grid>
        <ids-label font-size="12">Labels / Typography</ids-label>
      </ids-layout-grid>
      <ids-layout-grid>
        <ids-layout-column>
          <ids-label font-size="72">Size 72</ids-label>
          <ids-label font-size="60">Size 60</ids-label>
          <ids-label font-size="48">Size 48</ids-label>
          <ids-label font-size="40">Size 40</ids-label>
          <ids-label font-size="32">Size 32 (xl)</ids-label>
          <ids-label font-size="28">Size 28</ids-label>
          <ids-label font-size="24">Size 24 (lg)</ids-label>
          <ids-label font-size="20">Size 20</ids-label>
          <ids-label font-size="16">Size 16 (base)</ids-label>
          <ids-label font-size="14">Size 14 (sm)</ids-label>
          <ids-label font-size="12">Size 12 (xs)</ids-label>
          <ids-label font-size="10">Size 10</ids-label>
        </ids-layout-column>
      </ids-layout-grid>
    </React.Fragment>
  );
}

export default IdsLabels;
