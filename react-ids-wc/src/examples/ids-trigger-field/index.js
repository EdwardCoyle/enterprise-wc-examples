import React from 'react';

const IdsTriggerField = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Trigger Field
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid cols="3" gap="md">
        <ids-trigger-field
          id="trigger-field-1"
          size="sm"
          tabbable="false"
          label="Date Field"
        >
          <ids-input></ids-input>
          <ids-trigger-button slot="trigger-end">
            <ids-text audible="true">Date Field trigger</ids-text>
            <ids-icon slot="icon" icon="schedule"></ids-icon>
          </ids-trigger-button>
        </ids-trigger-field>

        <ids-layout-grid-cell>
          <ids-trigger-field id="trigger-field-2" size="md" label="Timepicker">
            <ids-input type="text"></ids-input>
            <ids-trigger-button slot="trigger-end">
              <ids-text audible="true">Timepicker trigger</ids-text>
              <ids-icon slot="icon" icon="clock"></ids-icon>
            </ids-trigger-button>
          </ids-trigger-field>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <ids-trigger-field
            id="trigger-field-3"
            label="Products"
            disable-native-events="true"
            validate="required"
          >
            <ids-input
              placeholder="Enter Product"
              validate="required"
            ></ids-input>
            <ids-trigger-button slot="trigger-end">
              <ids-text audible="true">Products trigger</ids-text>
              <ids-icon slot="icon" icon="search-list"></ids-icon>
            </ids-trigger-button>
          </ids-trigger-field>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid cols="3" gap="md">
        <ids-layout-grid-cell>
          <ids-trigger-field
            id="trigger-field-4"
            size="md"
            label="Disabled Trigger Field"
            disabled
            placeholder="Enter Album Name"
          >
            <ids-input disabled="true" value="Enter Product"></ids-input>
            <ids-trigger-button disabled slot="trigger-end">
              <ids-text audible="true">Products trigger</ids-text>
              <ids-icon slot="icon" icon="search-list"></ids-icon>
            </ids-trigger-button>
          </ids-trigger-field>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <ids-trigger-field
            id="trigger-field-5"
            size="md"
            label="Two Trigger Buttons"
            placeholder="Enter Product"
          >
            <ids-trigger-button slot="trigger-start">
              <ids-text audible="true">Products trigger</ids-text>
              <ids-icon slot="icon" icon="caret-down"></ids-icon>
            </ids-trigger-button>
            <ids-input placeholder="Enter Product" label-hidden></ids-input>
            <ids-trigger-button slot="trigger-end">
              <ids-text audible="true">Products trigger</ids-text>
              <ids-icon slot="icon" icon="caret-down"></ids-icon>
            </ids-trigger-button>
          </ids-trigger-field>
        </ids-layout-grid-cell>

        <ids-layout-grid-cell>
          <ids-trigger-field
            id="trigger-field-6"
            size="md"
            label="Search Field"
          >
            <ids-input placeholder="Search" label-hidden></ids-input>
            <ids-trigger-button>
              <ids-text audible="true">Search trigger</ids-text>
              <ids-icon slot="icon" icon="search"></ids-icon>
            </ids-trigger-button>
          </ids-trigger-field>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsTriggerField;
