import React from 'react';

const IdsCard = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Cards
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="2" gap="md">
        <ids-layout-grid-cell>
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
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-card>
            <div slot="card-header">
              <ids-text font-size="20" type="h2">
                Card Title Two
              </ids-text>
            </div>
            <div slot="card-content"></div>
          </ids-card>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsCard;
