import React, { useRef, useEffect } from 'react';
import 'ids-enterprise-wc/components/ids-slider/ids-slider';

const IdsSlider = () => {
  const surveyRef = useRef();

  useEffect(() => {
    surveyRef.current.labels = [
      'very bad',
      'poor',
      'average',
      'good',
      'excellent'
    ];
  }, []);

  return (
    <>
      <ids-layout-grid auto="true">
        <ids-text font-size="12" type="h1">
          Slider
        </ids-text>
      </ids-layout-grid>

      <ids-layout-grid cols="3" gap="xl">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Single Slider:{' '}
          </ids-text>
          <ids-slider type="single"></ids-slider>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Double Slider:{' '}
          </ids-text>
          <ids-slider type="double"></ids-slider>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Step Slider:{' '}
          </ids-text>
          <ids-slider type="step" step-number="11"></ids-slider>
        </ids-layout-grid-cell>
      </ids-layout-grid>

      <ids-layout-grid cols="3" gap="xl">
        <ids-layout-grid-cell>
          <ids-text font-size="12" type="h1">
            Vertical Sliders:{' '}
          </ids-text>
          <ids-slider type="single" vertical color="red"></ids-slider>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-slider
            type="range"
            vertical
            color="green"
            show-tooltip
          ></ids-slider>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-slider
            className="survey"
            type="step"
            vertical
            step-number="6"
            color=""
            label="Status"
          ></ids-slider>
        </ids-layout-grid-cell>
        <ids-layout-grid-cell>
          <ids-slider
            ref={surveyRef}
            className="survey"
            type="step"
            vertical
            step-number="5"
          ></ids-slider>
        </ids-layout-grid-cell>
      </ids-layout-grid>
    </>
  );
};

export default IdsSlider;
