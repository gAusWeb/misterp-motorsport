import { useEffect, useRef } from "react";
import "./gains-meter.scss";
import Counter from "./displayIncrementNumber";

// import UseOnScreen from "./utils/hooks/UseOnScreen";

export const GainsMeter = ({ originalPower, gainsPower }: any) => {
  const powerMeterWrapper = useRef(null);
  const torqueMeterWrapper = useRef(null);
  const countWrapperPower = useRef(0);

  // const isVisible = UseOnScreen(powerMeterWrapper);

  // const countUpTo = (n: number) => {
  //   for (let i = 0; i <= n; i++) {
  //     // const textNode = document.createTextNode(i + "kW");
  //     // outputElement?.appendChild(textNode);
  //     setTimeout(() => {
  //       countWrapperPower.current = i;
  //     }, 100);
  //   }

  // };

  // function Counter({ targetNumber }: { targetNumber: number }) {
  //   const count = useRef(0);

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       if (count.current < targetNumber) {
  //         count.current += 1;
  //         console.log(count.current);
  //       } else {
  //         clearInterval(intervalId);
  //       }
  //     }, 1000);

  //     return () => clearInterval(intervalId);
  //   }, [targetNumber]);

  //   return <span>Counting up to: {targetNumber}</span>;
  // }

  return (
    <>
      <div className="border overflow-hidden mb-10">
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Sunset in the mountains"
        />

        <div className="px-6 py-2">
          <div className="font-bold text-xl mt-2">VL Calais Turbo</div>
        </div>

        <div className="gains-meter px-6" ref={powerMeterWrapper}>
          <div className="label flex justify-between">
            <span>Power</span>
            <span>
              <span className="amnt">75</span>% Increase
            </span>
          </div>

          <div className="meter relative">
            <div
              // {...(isVisible
              //   ? { style: { width: "70%" } }
              //   : { style: { width: "0%" } })}
              className="progress-wrapper h-full "
            >
              <div className="progress relative flex justify-between h-full"></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center px-2 text-white">
              {Counter({
                originalPower,
                gainsPower,
              })}
            </div>
          </div>
        </div>

        <div className="gains-meter px-6 pt-4 pb-2" ref={torqueMeterWrapper}>
          <div className="label flex justify-between">
            <span>
              <span className="amnt">75</span>% Torque
            </span>
            <span>Increase</span>
          </div>

          <div className="meter">
            <span style={{ width: "70%" }}></span>
            <div className="progress flex justify-between ">
              <span>test</span>
              <span>test</span>
            </div>
          </div>
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #dynoTune
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #550KW
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #VLTurbo
          </span>
        </div>
      </div>

      {/* <div
        className="jet-listing-grid__item jet-listing-dynamic-post-1735 slick-slide slick-active"
        data-post-id="1735"
        style={{ width: "494px" }}
        tabindex="0"
        role="tabpanel"
        id="slick-slide12"
        aria-describedby="slick-slide-control12"
        data-slick-index="2"
        aria-hidden="false"
      >
        <div
          className="jet-engine-listing-overlay-wrap"
          data-url="https://tunedbyanton.com/dyno-results/holden-commodore-vf-lsa/"
        >
          {" "}
          <div
            data-elementor-type="jet-listing-items"
            data-elementor-id="564"
            className="elementor elementor-564"
          >
            <div
              className="elementor-element elementor-element-73c72b9 e-container--column e-container"
              data-id="73c72b9"
              data-element_type="container"
              data-settings='{"background_background":"classic"}'
            >
              {" "}
              <div
                className="elementor-element elementor-element-e3bf6d0 e-container--column e-container"
                data-id="e3bf6d0"
                data-element_type="container"
              >
                {" "}
                <div
                  className="elementor-element elementor-element-edb5559 elementor-widget elementor-widget-heading"
                  data-id="edb5559"
                  data-element_type="widget"
                  data-widget_type="heading.default"
                >
                  <div className="elementor-widget-container">
                    <h3 className="elementor-heading-title elementor-size-default">
                      HSV GTS VF LSA
                    </h3>{" "}
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-d4e0bc0 e-container--row e-container"
                  data-id="d4e0bc0"
                  data-element_type="container"
                >
                  {" "}
                  <div
                    className="elementor-element elementor-element-035278d elementor-widget elementor-widget-jet-listing-dynamic-field"
                    data-id="035278d"
                    data-element_type="widget"
                    data-widget_type="jet-listing-dynamic-field.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="jet-listing jet-listing-dynamic-field display-inline">
                        <div className="jet-listing-dynamic-field__inline-wrap">
                          <div className="jet-listing-dynamic-field__content">
                            Stage 2
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-19ba1a3 elementor-widget elementor-widget-jet-listing-dynamic-field"
                    data-id="19ba1a3"
                    data-element_type="widget"
                    data-widget_type="jet-listing-dynamic-field.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="jet-listing jet-listing-dynamic-field display-inline">
                        <div className="jet-listing-dynamic-field__inline-wrap">
                          <div className="jet-listing-dynamic-field__content">
                            Factory ECU
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-cc35c7c e-container--column e-container"
                  data-id="cc35c7c"
                  data-element_type="container"
                >
                  {" "}
                  <div
                    className="elementor-element elementor-element-d5eab81 elementor-widget elementor-widget-image"
                    data-id="d5eab81"
                    data-element_type="widget"
                    data-widget_type="image.default"
                  >
                    <div className="elementor-widget-container">
                      <a
                        href="https://tunedbyanton.com/dyno-results/holden-commodore-vf-lsa/"
                        tabIndex={0}
                      >
                        <img
                          width="768"
                          height="512"
                          src="https://tunedbyanton.com/wp-content/uploads/2022/04/VF-LSA-768x512.jpg"
                          className="attachment-medium_large size-medium_large"
                          alt=""
                          loading="lazy"
                          src="https://tunedbyanton.com/wp-content/uploads/2022/04/VF-LSA-768x512.jpg 768w, https://tunedbyanton.com/wp-content/uploads/2022/04/VF-LSA-scaled-600x400.jpg 600w, https://tunedbyanton.com/wp-content/uploads/2022/04/VF-LSA-300x200.jpg 300w, https://tunedbyanton.com/wp-content/uploads/2022/04/VF-LSA-1024x683.jpg 1024w, https://tunedbyanton.com/wp-content/uploads/2022/04/VF-LSA-1536x1024.jpg 1536w, https://tunedbyanton.com/wp-content/uploads/2022/04/VF-LSA-2048x1365.jpg 2048w"
                          sizes="(max-width: 768px) 100vw, 768px"
                        />{" "}
                      </a>
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-5ad7dda elementor-absolute elementor-widget elementor-widget-image"
                    data-id="5ad7dda"
                    data-element_type="widget"
                    data-settings='{"_position":"absolute"}'
                    data-widget_type="image.default"
                  >
                    <div className="elementor-widget-container">
                      <img
                        width="949"
                        height="221"
                        src="https://tunedbyanton.com/wp-content/uploads/2022/03/Tuned-By-Anton-LOGO-WHITE.svg"
                        className="attachment-full size-full"
                        alt=""
                        loading="lazy"
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-element elementor-element-8396891 e-container--column e-container"
                data-id="8396891"
                data-element_type="container"
              >
                {" "}
                <div
                  className="elementor-element elementor-element-d33d21b e-container--column e-container"
                  data-id="d33d21b"
                  data-element_type="container"
                >
                  {" "}
                  <div
                    className="elementor-element elementor-element-76a5a39 e-container--row e-container"
                    data-id="76a5a39"
                    data-element_type="container"
                  >
                    {" "}
                    <div
                      className="elementor-element elementor-element-0bb0ad5 elementor-widget elementor-widget-heading"
                      data-id="0bb0ad5"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h3 className="elementor-heading-title elementor-size-default">
                          Power
                        </h3>{" "}
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-2e6420a elementor-widget__width-auto jedv-enabled--yes elementor-widget elementor-widget-heading"
                      data-id="2e6420a"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h4 className="elementor-heading-title elementor-size-default">
                          29% increase
                        </h4>{" "}
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className="elementor-element elementor-element-6af6709 elementor-widget elementor-widget-jet-progress-bar"
                    data-id="6af6709"
                    data-element_type="widget"
                    data-widget_type="jet-progress-bar.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-jet-progress-bar jet-elements">
                        <div
                          className="jet-progress-bar jet-progress-bar-type-1"
                          data-percent="77.78"
                          data-type="type-1"
                        >
                          <div className="jet-progress-bar__inner">
                            <div className="jet-progress-bar__title"></div>
                            <div className="jet-progress-bar__wrapper">
                              <div
                                className="jet-progress-bar__status-bar"
                                style={{ width: "77.78%" }}
                              >
                                <div className="jet-progress-bar__percent">
                                  <span className="jet-progress-bar__percent-value">
                                    78
                                  </span>
                                  <span className="jet-progress-bar__percent-suffix">
                                    %
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-ad5059d e-container--row e-container"
                    data-id="ad5059d"
                    data-element_type="container"
                  >
                    {" "}
                    <div
                      className="elementor-element elementor-element-f66b7ad jedv-enabled--yes elementor-widget elementor-widget-text-editor"
                      data-id="f66b7ad"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div className="elementor-widget-container">350kW </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-a4af3f4 elementor-widget elementor-widget-counter"
                      data-id="a4af3f4"
                      data-element_type="widget"
                      data-widget_type="counter.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-counter">
                          <div className="elementor-counter-number-wrapper">
                            <span className="elementor-counter-number-prefix"></span>
                            <span
                              className="elementor-counter-number"
                              data-duration="1000"
                              data-to-value="450"
                              data-from-value="350"
                            >
                              450
                            </span>
                            <span className="elementor-counter-number-suffix">
                              kW
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-d5de8fd e-container--column e-container"
                  data-id="d5de8fd"
                  data-element_type="container"
                >
                  {" "}
                  <div
                    className="elementor-element elementor-element-604d4a8 e-container--row e-container"
                    data-id="604d4a8"
                    data-element_type="container"
                  >
                    {" "}
                    <div
                      className="elementor-element elementor-element-9e1be85 elementor-widget elementor-widget-heading"
                      data-id="9e1be85"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h3 className="elementor-heading-title elementor-size-default">
                          Torque
                        </h3>{" "}
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-d5a1ee4 elementor-widget__width-auto jedv-enabled--yes elementor-widget elementor-widget-heading"
                      data-id="d5a1ee4"
                      data-element_type="widget"
                      data-widget_type="heading.default"
                    >
                      <div className="elementor-widget-container">
                        <h4 className="elementor-heading-title elementor-size-default">
                          69% increase
                        </h4>{" "}
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className="elementor-element elementor-element-43c54ab elementor-widget elementor-widget-jet-progress-bar"
                    data-id="43c54ab"
                    data-element_type="widget"
                    data-widget_type="jet-progress-bar.default"
                  >
                    <div className="elementor-widget-container">
                      <div className="elementor-jet-progress-bar jet-elements">
                        <div
                          className="jet-progress-bar jet-progress-bar-type-1"
                          data-percent="59.09"
                          data-type="type-1"
                        >
                          <div className="jet-progress-bar__inner">
                            <div className="jet-progress-bar__title"></div>
                            <div className="jet-progress-bar__wrapper">
                              <div
                                className="jet-progress-bar__status-bar"
                                style={{ width: "59.09%" }}
                              >
                                <div className="jet-progress-bar__percent">
                                  <span className="jet-progress-bar__percent-value">
                                    59
                                  </span>
                                  <span className="jet-progress-bar__percent-suffix">
                                    %
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                  <div
                    className="elementor-element elementor-element-396c1ff e-container--row e-container"
                    data-id="396c1ff"
                    data-element_type="container"
                  >
                    {" "}
                    <div
                      className="elementor-element elementor-element-8f4158d jedv-enabled--yes elementor-widget elementor-widget-text-editor"
                      data-id="8f4158d"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div className="elementor-widget-container">621Nm </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-710a93c elementor-widget elementor-widget-counter"
                      data-id="710a93c"
                      data-element_type="widget"
                      data-widget_type="counter.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="elementor-counter">
                          <div className="elementor-counter-number-wrapper">
                            <span className="elementor-counter-number-prefix"></span>
                            <span
                              className="elementor-counter-number"
                              data-duration="1000"
                              data-to-value="1051"
                              data-from-value="621"
                            >
                              1051
                            </span>
                            <span className="elementor-counter-number-suffix">
                              Nm
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div
                  className="elementor-element elementor-element-7428597 elementor-align-justify elementor-widget elementor-widget-button"
                  data-id="7428597"
                  data-element_type="widget"
                  data-widget_type="button.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-button-wrapper">
                      <a
                        href="https://tunedbyanton.com/dyno-results/holden-commodore-vf-lsa/"
                        className="elementor-button-link elementor-button elementor-size-sm"
                        role="button"
                        tabIndex={0}
                      >
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">
                            View Dyno Result
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <a
            href="https://tunedbyanton.com/dyno-results/holden-commodore-vf-lsa/"
            className="jet-engine-listing-overlay-link"
            tabIndex={0}
          ></a>
        </div>
      </div> */}
    </>
  );
};
