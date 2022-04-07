import React from 'react';

const IdsSummaryField = () => {
  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Summary Field
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid auto="true">
        <ids-layout-grid-cell>
          <ids-summary-field
            label="Shipping to"
            data="4209 Industrial Avenue<br/>Los Angeles, California 90001 USA"
          ></ids-summary-field>
          <ids-summary-field
            label="Shipping Method"
            data="Freight"
          ></ids-summary-field>
          <ids-summary-field
            label="Estimated Delivery"
            data="June 21, 2015 (4 days)"
          ></ids-summary-field>
          <ids-summary-field
            label="Comments"
            data="Disrupt qui bespoke man braid truffaut sint hexagon pour-over duis, minim coloring book heirloom. Mustache godard sed edison bulb culpa affogato williamsburg af biodiesel helvetica chambray listicle enamel pin tattooed. Shaman laboris banjo ut, actually celiac anim nostrud iPhone chambray kinfolk. Chicharrones chillwave sed nulla hexagon photo booth meggings mustache id jianbing dolore 3 wolf moon. Vaporware listicle church-key health goth drinking vinegar gluten-free direct trade. Quinoa keytar cupidatat in paleo williamsburg non roof party, ipsum hell of aute XOXO tacos. Vape affogato iPhone, irony ea master cleanse enamel pin hell of raw denim thundercats. Tattooed eu dreamcatcher pour-over, tempor iceland bitters butcher authentic tumblr chicharrones humblebrag four dollar toast ipsum locavore. Cred artisan mixtape narwhal aute. Sunt messenger bag brunch do cornhole crucifix yr. Esse vice distillery, hammock scenester succulents lomo est try-hard gochujang. Brooklyn normcore incididunt plaid pabst mustache lorem subway tile irony laboris distillery do meggings."
          ></ids-summary-field>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsSummaryField;
