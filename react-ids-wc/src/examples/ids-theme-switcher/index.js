import React from 'react';

const IdsThemeSwitcher = () => {
  return (
    <>
      <ids-theme-switcher mode="light" version="new"></ids-theme-switcher>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Themes
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid auto="true">
        <ids-tag>Normal Tag</ids-tag>
      </ids-layout-grid>
    </>
  );
};

export default IdsThemeSwitcher;
