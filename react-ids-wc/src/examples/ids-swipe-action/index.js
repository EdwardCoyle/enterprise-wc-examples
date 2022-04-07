import React from 'react';

const IdsSwipeAction = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Swipe Action (Reveal)
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="2" gap="none">
        <ids-layout-grid-cell>
          <ids-card auto-height="true">
            <div slot="card-content">
              <ids-swipe-action>
                <ids-button
                  slot="action-left"
                  id="action-left-reveal"
                  type="swipe-action-left"
                >
                  <ids-icon slot="icon" icon="reply" size="small"></ids-icon>
                  <span slot="text">Left Action</span>
                </ids-button>
                <div slot="contents">
                  <ids-layout-grid cols="2" no-margins="true">
                    <ids-layout-grid-cell>
                      <ids-text font-size="16">
                        Tuesday, 22nd September
                      </ids-text>
                      <ids-text font-size="14">8:40AM-2:00PM</ids-text>
                    </ids-layout-grid-cell>
                    <ids-layout-grid-cell justify="end">
                      <ids-menu-button
                        id="actions-reveal"
                        menu="actions-reveal-menu"
                      >
                        <ids-icon
                          slot="icon"
                          icon="more"
                          vertical="true"
                        ></ids-icon>
                        <span className="audible">Actions</span>
                      </ids-menu-button>
                      <ids-popup-menu
                        id="actions-reveal-menu"
                        target="actions-reveal"
                        trigger="click"
                      >
                        <ids-menu-group>
                          <ids-menu-item>Right Action</ids-menu-item>
                          <ids-menu-item>Left Action</ids-menu-item>
                          <ids-menu-item>Other Action</ids-menu-item>
                        </ids-menu-group>
                      </ids-popup-menu>
                    </ids-layout-grid-cell>
                  </ids-layout-grid>
                </div>
                <ids-button
                  slot="action-right"
                  id="action-right-reveal"
                  type="swipe-action-right"
                >
                  <ids-icon slot="icon" icon="tack" size="small"></ids-icon>
                  <span slot="text">Right Action</span>
                </ids-button>
              </ids-swipe-action>
            </div>
          </ids-card>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Swipe Action (Reveal / One Action)
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="2" gap="none">
        <ids-layout-grid-cell>
          <ids-card auto-height="true">
            <div slot="card-content">
              <ids-swipe-action>
                <div slot="contents">
                  <ids-layout-grid cols="2" no-margins="true">
                    <ids-layout-grid-cell>
                      <ids-text font-size="16">
                        Tuesday, 23nd September
                      </ids-text>
                      <ids-text font-size="14">8:10AM-2:20PM</ids-text>
                    </ids-layout-grid-cell>
                    <ids-layout-grid-cell justify="end">
                      <ids-menu-button
                        id="actions-reveal-one"
                        menu="actions-reveal-one-menu"
                      >
                        <ids-icon
                          slot="icon"
                          icon="more"
                          vertical="true"
                        ></ids-icon>
                        <span className="audible">Actions</span>
                      </ids-menu-button>
                      <ids-popup-menu
                        id="actions-reveal-one-menu"
                        target="actions-reveal-one"
                        trigger="click"
                      >
                        <ids-menu-group>
                          <ids-menu-item>Right Action</ids-menu-item>
                          <ids-menu-item>Left Action</ids-menu-item>
                          <ids-menu-item>Other Action</ids-menu-item>
                        </ids-menu-group>
                      </ids-popup-menu>
                    </ids-layout-grid-cell>
                  </ids-layout-grid>
                </div>
                <ids-button
                  slot="action-right"
                  id="action-right-reveal-one"
                  type="swipe-action-right"
                >
                  <ids-icon slot="icon" icon="tack" size="small"></ids-icon>
                  <span slot="text">Right Action</span>
                </ids-button>
              </ids-swipe-action>
            </div>
          </ids-card>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Swipe Action (Continuous)
        </ids-text>
      </ids-layout-grid>
      <ids-layout-grid cols="2" gap="none">
        <ids-layout-grid-cell>
          <ids-card auto-height="true">
            <div slot="card-content">
              <ids-swipe-action swipe-type="continuous">
                <ids-button
                  slot="action-left"
                  id="action-left-continuous"
                  type="swipe-action-left"
                >
                  <ids-icon slot="icon" icon="reply" size="small"></ids-icon>
                  <span slot="text">Left Action</span>
                </ids-button>
                <div slot="contents">
                  <ids-layout-grid cols="2" no-margins="true">
                    <ids-layout-grid-cell>
                      <ids-text font-size="16">
                        Tuesday, 22nd September
                      </ids-text>
                      <ids-text font-size="14">8:40AM-2:00PM</ids-text>
                    </ids-layout-grid-cell>
                    <ids-layout-grid-cell justify="end">
                      <ids-menu-button
                        id="actions-continuous"
                        menu="actions-continuous-menu"
                      >
                        <ids-icon
                          slot="icon"
                          icon="more"
                          vertical="true"
                        ></ids-icon>
                        <span className="audible">Actions</span>
                      </ids-menu-button>
                      <ids-popup-menu
                        id="actions-continuous-menu"
                        target="actions-continuous"
                        trigger="click"
                      >
                        <ids-menu-group>
                          <ids-menu-item>Right Action</ids-menu-item>
                          <ids-menu-item>Left Action</ids-menu-item>
                          <ids-menu-item>Other Action</ids-menu-item>
                        </ids-menu-group>
                      </ids-popup-menu>
                    </ids-layout-grid-cell>
                  </ids-layout-grid>
                </div>
                <ids-button
                  slot="action-right"
                  id="action-right-continuous"
                  type="swipe-action-right"
                >
                  <ids-icon slot="icon" icon="tack" size="small"></ids-icon>
                  <span slot="text">Right Action</span>
                </ids-button>
              </ids-swipe-action>
            </div>
          </ids-card>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid>
        <ids-text font-size="12" id="output"></ids-text>
      </ids-layout-grid>
    </>
  );
};

export default IdsSwipeAction;
