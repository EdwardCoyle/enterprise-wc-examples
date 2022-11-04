import React from 'react';
import 'ids-enterprise-wc/components/ids-loading-indicator/ids-loading-indicator';


const IdsLoadingIndicator = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Circular Loading Indicator
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid gap="md" cols="4">
        <ids-layout-grid-cell>
          <div className="circular-progress-container" data-step="10">
            <ids-loading-indicator></ids-loading-indicator>
          </div>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <div className="circular-progress-container" data-step="6">
            <ids-loading-indicator progress="30"></ids-loading-indicator>
          </div>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <div className="circular-progress-container" data-step="8">
            <ids-loading-indicator
              progress="72"
              percentage-visible
            ></ids-loading-indicator>
          </div>
        </ids-layout-grid-cell>
      </ids-layout-grid>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Linear Loading Indicator
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid gap="md" cols="4">
        <ids-layout-grid-cell col-span="1">
          <ids-loading-indicator linear></ids-loading-indicator>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" data-step="5">
          <ids-loading-indicator linear progress="20"></ids-loading-indicator>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1" data-step="7">
          <ids-loading-indicator
            linear
            progress="35"
            percentage-visible
          ></ids-loading-indicator>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell></ids-layout-grid-cell>
      </ids-layout-grid>
      <ids-layout-grid auto="true" gap="md">
        <ids-text font-size="12" type="h1">
          Sticky Loading Indicator
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid gap="md" auto="true" cols="4">
        <ids-layout-grid-cell col-span="1">
          <div className="sticky-indicator-container">
            <ids-text>
              Relative-Positioned Content Within the Dashed Border
            </ids-text>
            <ids-loading-indicator sticky></ids-loading-indicator>
          </div>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell col-span="1">
          <div className="sticky-indicator-container" data-step="10">
            <ids-text>
              Relative-Positioned Content Within the Dashed Border
            </ids-text>
            <ids-loading-indicator sticky progress="10"></ids-loading-indicator>
          </div>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsLoadingIndicator;
