import React from 'react';
import 'ids-enterprise-wc/components/ids-hidden/ids-hidden';

const IdsHidden = () => {
  return (
    <>
      <ids-theme-switcher mode="light"></ids-theme-switcher>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Hidden
        </ids-text>
      </ids-layout-grid>

      <ids-hidden id="hidden-1" hide-up="md">
        <ids-card>
          <div slot="card-header">
            <ids-text
              font-size="20"
              type="h2"
              overflow="ellipsis"
              tooltip="true"
            >
              Card Title One
            </ids-text>
          </div>
          <div slot="card-content"></div>
        </ids-card>
      </ids-hidden>

      <ids-hidden id="hidden-2" hide-down="md">
        <ids-card>
          <div slot="card-header">
            <ids-text
              font-size="20"
              type="h2"
              overflow="ellipsis"
              tooltip="true"
            >
              Card Title Two
            </ids-text>
          </div>
          <div slot="card-content"></div>
        </ids-card>
      </ids-hidden>
    </>
  );
};

export default IdsHidden;
