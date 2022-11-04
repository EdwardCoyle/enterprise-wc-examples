import React from 'react';
import 'ids-enterprise-wc/components/ids-app-menu/ids-app-menu';

const IdsAppMenu = () => {
  return (
    <>
      <ids-layout-grid>
        <ids-layout-grid-cell>
          <ids-button id="app-menu-trigger" icon="menu">
            <span slot="text" className="audible">
              Open App Menu
            </span>
          </ids-button>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-app-menu id="app-menu">
        <img slot="avatar" id="avatar" alt="Picture of Richard Fairbanks" />
        <ids-text slot="username" font-size="24" font-weight="bold">
          Richard Fairbanks
        </ids-text>

        <ids-toolbar slot="header">
          <ids-toolbar-section align="center-even" type="fluid">
            <ids-button id="header-btn-download" icon="download" padding="16px">
              <ids-text slot="text" audible>
                Download
              </ids-text>
            </ids-button>
            <ids-button id="header-btn-print" icon="print">
              <ids-text slot="text" audible>
                Print
              </ids-text>
            </ids-button>
            <ids-button id="header-btn-purchasing" icon="purchasing">
              <ids-text slot="text" audible>
                Purchasing
              </ids-text>
            </ids-button>
            <ids-button id="header-btn-notification" icon="notification">
              <ids-text slot="text" audible>
                Notification
              </ids-text>
            </ids-button>
            <ids-button id="header-btn-inventory" icon="inventory">
              <ids-text slot="text" audible>
                Inventory
              </ids-text>
            </ids-button>
          </ids-toolbar-section>
        </ids-toolbar>

        <ids-search-field
          id="search"
          clearable
          color-variant="app-menu"
          label="Application Menu Search"
          label-state="collapsed"
          no-margins
          slot="search"
        ></ids-search-field>

        <ids-accordion>
          <ids-accordion-panel>
            <ids-accordion-header slot="header" icon="user">
              <ids-text font-size="16">Employee</ids-text>
            </ids-accordion-header>
            <ids-accordion-panel slot="content">
              <ids-accordion-header slot="header">
                <ids-text font-size="14">My Profile</ids-text>
              </ids-accordion-header>
            </ids-accordion-panel>
            <ids-accordion-panel slot="content">
              <ids-accordion-header slot="header">
                <ids-text font-size="14">Talent Profile</ids-text>
              </ids-accordion-header>
            </ids-accordion-panel>
            <ids-accordion-panel slot="content">
              <ids-accordion-header slot="header">
                <ids-text font-size="14">View Compensation</ids-text>
              </ids-accordion-header>
            </ids-accordion-panel>
            <ids-accordion-panel slot="content">
              <ids-accordion-header slot="header">
                <ids-text font-size="14">RAVE</ids-text>
              </ids-accordion-header>
            </ids-accordion-panel>
            <ids-accordion-panel slot="content">
              <ids-accordion-header slot="header">
                <ids-text font-size="14">Request Time Off</ids-text>
              </ids-accordion-header>
            </ids-accordion-panel>
            <ids-accordion-panel slot="content">
              <ids-accordion-header slot="header">
                <ids-text font-size="14">Benefits</ids-text>
              </ids-accordion-header>
              <ids-accordion-panel slot="content">
                <ids-accordion-header slot="header">
                  <ids-text font-size="14">My Benefits</ids-text>
                </ids-accordion-header>
              </ids-accordion-panel>
              <ids-accordion-panel slot="content">
                <ids-accordion-header slot="header">
                  <ids-text font-size="14">
                    Dependents and Beneficiaries
                  </ids-text>
                </ids-accordion-header>
              </ids-accordion-panel>
              <ids-accordion-panel slot="content">
                <ids-accordion-header slot="header">
                  <ids-text font-size="14">Life Events</ids-text>
                </ids-accordion-header>
              </ids-accordion-panel>
              <ids-accordion-panel slot="content">
                <ids-accordion-header slot="header">
                  <ids-text font-size="14">Benefits Information</ids-text>
                </ids-accordion-header>
              </ids-accordion-panel>
            </ids-accordion-panel>
            <ids-accordion-panel slot="content">
              <ids-accordion-header slot="header">
                <ids-text font-size="14">My Rewards</ids-text>
              </ids-accordion-header>
            </ids-accordion-panel>
            <ids-accordion-panel slot="content">
              <ids-accordion-header slot="header">
                <ids-text font-size="14">Find a Coworker</ids-text>
              </ids-accordion-header>
            </ids-accordion-panel>
            <ids-accordion-panel slot="content">
              <ids-accordion-header slot="header">
                <ids-text font-size="14">My Growth</ids-text>
              </ids-accordion-header>
            </ids-accordion-panel>
          </ids-accordion-panel>
          <ids-accordion-panel>
            <ids-accordion-header slot="header" icon="distribution">
              <ids-text font-size="16">Manager</ids-text>
            </ids-accordion-header>
          </ids-accordion-panel>
          <ids-accordion-panel>
            <ids-accordion-header slot="header" icon="roles">
              <ids-text font-size="16">Recruiter</ids-text>
            </ids-accordion-header>
          </ids-accordion-panel>
        </ids-accordion>

        <ids-toolbar slot="footer">
          <ids-toolbar-section align="center-even" type="fluid">
            <ids-button id="footer-btn-settings">
              <ids-icon slot="icon" icon="settings"></ids-icon>
              <span slot="text">Settings</span>
            </ids-button>
            <ids-button id="footer-btn-proxy" icon="employee-directory">
              <ids-text slot="text" audible>
                Proxy as User
              </ids-text>
            </ids-button>
            <ids-button id="footer-btn-about" icon="info">
              <ids-text slot="text" audible>
                About This Application
              </ids-text>
            </ids-button>
            <ids-button id="footer-btn-logout" icon="logout">
              <ids-text slot="text" audible>
                Logout
              </ids-text>
            </ids-button>
          </ids-toolbar-section>
        </ids-toolbar>
      </ids-app-menu>
    </>
  );
};

export default IdsAppMenu;
