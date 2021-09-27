import React, { useRef, useEffect } from 'react';

import 'ids-enterprise-wc/components/ids-layout-grid';
import 'ids-enterprise-wc/components/ids-text';
import 'ids-enterprise-wc/components/ids-card';
import 'ids-enterprise-wc/components/ids-list-view';
import 'ids-enterprise-wc/components/ids-notification-banner';

const IdsNotificationBanner = () => {
  const listViewRef = useRef();

  useEffect(async () => {
    const element = listViewRef.current;

    // Do an ajax request
    const response = await fetch('/data/products.json');
    const data = await response.json();

    // Set template
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
        message-text="DTO rejected by your manager for Sept 30, 2018."
        type="success"
        link="https://infor.com"
      ></ids-notification-banner>

      <ids-notification-banner
        message-text="Notification Banner with no link"
        type="alert"
      ></ids-notification-banner>

      <ids-notification-banner
        message-text="Notification Banner with custom link text."
        type="info"
        link="https://infor.com"
        link-text="Learn More"
      ></ids-notification-banner>

      <ids-notification-banner
        message-text="DTO rejected by your manager for Sept 30, 2018."
        type="error"
        link="https://infor.com"
      ></ids-notification-banner>

      <ids-notification-banner
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

              <ids-list-view ref={listViewRef} virtual-scroll="true">
              </ids-list-view>
            </div>
          </ids-card>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsNotificationBanner;
