import React from 'react';

import 'ids-enterprise-wc/components/ids-layout-grid';
import 'ids-enterprise-wc/components/ids-text';
import 'ids-enterprise-wc/components/ids-button';

const IdsButton = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Buttons
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="4" gap="md">
        <ids-layout-grid-cell>
          <ids-button id="test-button-default">
            <span slot="text">Default Button</span>
          </ids-button>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <ids-button id="test-button-primary" type="primary">
            <span slot="text">Primary Button</span>
          </ids-button>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <ids-button id="test-button-secondary" type="secondary">
            <span slot="text">Secondary Button</span>
          </ids-button>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <ids-button id="test-button-tertiary" type="tertiary">
            <span slot="text">Tertiary Button</span>
          </ids-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsButton;
