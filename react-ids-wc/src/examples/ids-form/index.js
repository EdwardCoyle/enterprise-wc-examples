import React from 'react';
import 'ids-enterprise-wc/components/ids-form/ids-form';

const IdsForm = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Ids Form
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid-cell>
        <ids-button type="tertiary">
          <ids-icon slot="icon" icon="settings"></ids-icon>
          <span slot="text">Toggle Compact</span>
        </ids-button>
      </ids-layout-grid-cell>

      <ids-form submit-button="btn-submit" id="sample-form">
        <ids-layout-grid cols="2" gap="md">
          <ids-layout-grid-cell>
            <ids-dropdown
              id="company-name"
              label="Company Name"
              value=""
              dirty-tracker
              validate="required"
              size="md"
              allow-blank="true"
            >
              <ids-list-box>
                <ids-list-box-option value="" selected>
                  None
                </ids-list-box-option>
                <ids-list-box-option value="acme">
                  Acme, Inc.
                </ids-list-box-option>
                <ids-list-box-option value="infor">
                  Widget Corp
                </ids-list-box-option>
              </ids-list-box>
            </ids-dropdown>
            <ids-input
              id="purchase-form"
              label="Purchase Form"
              value="3567"
              dirty-tracker
              validate="required"
              size="md"
            ></ids-input>
            <ids-lookup
              id="issue-methods"
              label="Issue Methods"
              title="Select an Item"
              field="description"
              value="102,103"
              dirty-tracker
              validate="required"
              size="md"
            ></ids-lookup>
            <ids-upload
              label="Attachments"
              id="attachments"
              dirty-tracker
              validate="required"
              size="md"
            ></ids-upload>
            <ids-checkbox
              id="freight"
              label="Freight"
              checked
              dirty-tracker
              validate="required"
              no-margin
            ></ids-checkbox>
            <ids-textarea
              id="notes"
              label="Notes"
              dirty-tracker
              validate="required"
              size="md"
            ></ids-textarea>
            <ids-button id="btn-submit" type="primary">
              <span slot="text">Submit</span>
            </ids-button>
          </ids-layout-grid-cell>
          <ids-layout-grid-cell>
            <ids-color-picker
              id="ship-color"
              label="Ship Color"
              value="ruby-80"
              clearable
              dirty-tracker
              validate="required"
              size="md"
            ></ids-color-picker>
            <ids-date-picker
              id="ship-date"
              label="Ship Date"
              value="3/4/2023"
              mask
              dirty-tracker
              validate="required"
              size="md"
            ></ids-date-picker>
            <ids-time-picker
              label="Ship Time"
              id="ship-time"
              mask="true"
              dirty-tracker
              validate="required"
              size="md"
            ></ids-time-picker>

            <ids-spinbox
              id="product-quantity"
              label="Quantity"
              dirty-tracker
              validate="required"
              value="0"
            ></ids-spinbox>
            <ids-radio-group
              label="Ship Type"
              dirty-tracker
              validate="required"
              id="ship-type"
            >
              <ids-radio value="opt1" label="Boat"></ids-radio>
              <ids-radio value="opt2" label="Truck" checked="true"></ids-radio>
            </ids-radio-group>
            <ids-switch
              id="send-notifications"
              label="Send notifications"
              checked="true"
            ></ids-switch>
          </ids-layout-grid-cell>
        </ids-layout-grid>
      </ids-form>
    </>
  );
};

export default IdsForm;
