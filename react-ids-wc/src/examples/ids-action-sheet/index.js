import React from 'react';
import 'ids-enterprise-wc/components/ids-action-sheet/ids-action-sheet';

const IdsActionSheet = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Action Sheet
          </ids-text>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid auto="true" gap="md">
        <ids-layout-grid-cell>
          <ids-menu-button id="icon-button" menu="icon-menu">
            <ids-icon slot="icon" icon="more"></ids-icon>
            <span className="audible">Icon Only Button</span>
          </ids-menu-button>

          <ids-popup-menu
            id="icon-menu"
            class="hide-sm-down"
            target="icon-button"
            trigger-type="click"
          >
            <ids-menu-group>
              <ids-menu-item icon="mail">Option One</ids-menu-item>
              <ids-menu-item icon="filter">Option Two</ids-menu-item>
              <ids-menu-item icon="profile">Option Three</ids-menu-item>
            </ids-menu-group>
          </ids-popup-menu>

          <ids-action-sheet>
            <ids-menu>
              <ids-menu-group>
                <ids-menu-item icon="mail" text-align="center">
                  Option One
                </ids-menu-item>
                <ids-menu-item icon="filter" text-align="center">
                  Option Two
                </ids-menu-item>
                <ids-menu-item icon="profile" text-align="center">
                  Option Three
                </ids-menu-item>
              </ids-menu-group>
            </ids-menu>
          </ids-action-sheet>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsActionSheet;
