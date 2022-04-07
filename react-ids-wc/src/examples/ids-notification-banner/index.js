import React, { useRef, useEffect } from 'react';

const IdsNotificationBanner = () => {
  const listViewRef = useRef();

  useEffect(async () => {
    // Adding ref current element to variable to be able cleanup event listeners on unmount
    const element = listViewRef.current;

    // Do an ajax request
    const response = await fetch('/data/products.json');
    const data = await response.json();

    // Set the default template
    element.defaultTemplate = [
      '<ids-text font-size="16" type="h2">${productName}</ids-text>',
      '<ids-text font-size="12" type="span">Count: ${units}</ids-text>',
      '<ids-text font-size="12" type="span">Price: $ ${unitPrice}</ids-text>'
    ].join('\n');

    // Set data
    element.data = data;
  }, []);

  return (
    <>
      <ids-layout-grid cols="3" gap="md">
        <ids-text font-size="12" type="h1">
          Notification Banner
        </ids-text>
      </ids-layout-grid>

      <ids-notification-banner
        id="ids-notification-banner-0"
        message-text="DTO rejected by your manager for Sept 30, 2018."
        type="success"
        link="https://infor.com"
      ></ids-notification-banner>

      <ids-notification-banner
        id="ids-notification-banner-1"
        message-text="Notification Banner with no link"
        type="alert"
      ></ids-notification-banner>

      <ids-notification-banner
        id="ids-notification-banner-2"
        message-text="Notification Banner with custom link text."
        type="info"
        link="https://infor.com"
        link-text="Learn More"
      ></ids-notification-banner>

      <ids-notification-banner
        id="ids-notification-banner-3"
        message-text="DTO rejected by your manager for Sept 30, 2018."
        type="error"
        link="https://infor.com"
      ></ids-notification-banner>

      <ids-notification-banner
        id="ids-notification-banner-4"
        message-text="Notification Banner with no link"
        type="fakeType"
      ></ids-notification-banner>

      <ids-layout-grid cols="3" gap="md">
        <ids-text font-size="12" type="h1">
          Notification Banner in Card
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid cols="3" gap="md">
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
            <div slot="card-content">
              <ids-notification-banner
                message-text="DTO rejected by your manager for Sept 30, 2018."
                type="success"
              ></ids-notification-banner>

              <ids-notification-banner
                message-text="Notification Banner with no link"
                type="alert"
              ></ids-notification-banner>

              <ids-notification-banner
                message-text="Notification Banner with custom link text."
                type="info"
              ></ids-notification-banner>

              <ids-notification-banner
                message-text="DTO rejected by your manager for Sept 30, 2018."
                type="error"
              ></ids-notification-banner>

              <ids-list-view
                id="list-view-1"
                virtual-scroll="true"
                ref={listViewRef}
              ></ids-list-view>
            </div>
          </ids-card>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsNotificationBanner;
