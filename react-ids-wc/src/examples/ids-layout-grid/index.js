import React from 'react';

import 'ids-enterprise-wc/components/ids-layout-grid';
// import 'ids-enterprise-wc/components/ids-text';

const IdsLayoutGrid = () => {
  return (
    <>
      <ids-layout-grid auto="true" gap="md">
        <ids-text font-size="12" type="h1">Layout Grid</ids-text>
      </ids-layout-grid>

      <ids-layout-grid cols="3" gap="md">
        <ids-layout-grid-cell fill="true" col-span="2" row-span="3">
          <ids-text font-size="12">Grid Cell</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell</ids-text>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell fill="true">
          <ids-text font-size="12">Grid Cell</ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
}

export default IdsLayoutGrid;
