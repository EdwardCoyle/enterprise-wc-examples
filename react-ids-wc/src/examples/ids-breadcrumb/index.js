import React from 'react';

const IdsBreadcrumb = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Breadcrumb
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid auto="true">
        <ids-breadcrumb>
          <ids-hyperlink font-size="14" color="unset" href="#">
            First Item
          </ids-hyperlink>
          <ids-hyperlink font-size="14" color="unset" href="#">
            Second Item
          </ids-hyperlink>
          <ids-hyperlink font-size="14" color="unset" disabled>
            Disabled Item
          </ids-hyperlink>
          <ids-hyperlink font-size="14" color="unset">
            Current Item
          </ids-hyperlink>
        </ids-breadcrumb>
      </ids-layout-grid>
    </>
  );
};

export default IdsBreadcrumb;
