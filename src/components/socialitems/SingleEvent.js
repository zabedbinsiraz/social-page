import {
  Button, DatePicker, Input, Modal, Select, Space,
  TimePicker
} from "antd";
import moment from "moment";
import React, { useState } from "react";
import SingleEventLeft from './SingleEventLeft';
import SingleEventRight from './SingleEventRight';

function SingleEvent() {
  const { TextArea } = Input;
  const [visible, setVisible] = useState(false);
  const { Option } = Select;
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  function onChange(value, dateString) {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  }
  function onOk(value) {
    console.log("onOk: ", value);
  }
  function onChange(time, timeString) {
    console.log(time, timeString);
  }
  return (
    <div className="_social_single_event_wrapper">
      <div className="_custom_row">
        <div className="_custom_col_xl_12 _custom_col_lg_12 _custom_col_md_12 _custom_col_sm_12">
          <div className="_social_single_event_top">
            <div className="_social_single_event_top_title">
              <h4>Upcoming Events</h4>
            </div>
            <div className="_social_single_event_top_btn">
              <Button onClick={() => setVisible(true)} type="submit">
                <span>Create Events</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={14}
                  height={6}
                  fill="none"
                  viewBox="0 0 14 6"
                >
                  <path
                    fill="#707584"
                    d="M11 6l3-3-3-3-.707.707L12.086 2.5H0v1h12.086l-1.793 1.793L11 6z"
                  />
                </svg>
              </Button>
              <Modal
                className="_M_social_event_single_modal"
                title="Create New Event"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={1000}
              >
                <div className="_M_social_event_modal">
                  <div className="_courseporium_social_top_cover">
                    <div className="_courseporium_top_cover_image">
                      <img
                        src="../../img/social-modal-img.png"
                        alt="img"
                        className="_cover_img"
                      />
                    </div>
                    <div className="_courseporium_social_top_edit_btn">
                      <button
                        type="submit"
                        className="_courseporium_social_top_edit_btn_link"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          fill="none"
                          viewBox="0 0 18 18"
                        >
                          <path
                            fill="#fff"
                            fillRule="evenodd"
                            d="M14.12 6.968l1.797-1.796c.545-.546.818-.818.963-1.112a2 2 0 000-1.776c-.145-.295-.418-.567-.963-1.112-.546-.546-.818-.818-1.112-.964a2 2 0 00-1.776 0c-.294.146-.567.418-1.112.964L10.098 2.99a10.9 10.9 0 004.023 3.978zM8.645 4.445l-6.87 6.87c-.426.425-.638.638-.778.899s-.199.556-.317 1.145l-.615 3.077c-.067.333-.1.5-.005.594.094.094.26.061.593-.006l3.077-.615c.59-.118.884-.177 1.145-.316.262-.14.474-.353.9-.778l6.888-6.89a12.903 12.903 0 01-4.018-3.98z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <form className="_M_social_event_modal_form">
                    <div className="_M_social_event_modal_form_inpt">
                      <div className="_custom_row">
                        <div className="_custom_col_xl_6 custom_col_lg_6 _custom_col_md_12 _custom_col_sm_12">
                          <label className="_inpt_titl _mar_b16">
                            Event Name
                          </label>
                          <Input
                            className="_inpt1"
                            placeholder="Masterclass on UX/UI design for beginners"
                          />
                        </div>
                        <div className="_custom_col_xl_6 custom_col_lg_6 _custom_col_md_12 _custom_col_sm_12">
                          <label className="_inpt_titl _mar_b16">Address</label>
                          <Input className="_inpt1" placeholder="text area.." />
                        </div>
                      </div>
                    </div>
                    <div className="_M_social_event_modal_form_inpt">
                      <div className="_custom_row">
                        <div className="_custom_col_xl_6 custom_col_lg_6 _custom_col_md_12 _custom_col_sm_12">
                          <div className="_custom_row">
                            <div className="_custom_col_xl_12 custom_col_lg_12 _custom_col_md_12 _custom_col_sm_12">
                              <div className="_M_social_event_modal_bottom">
                                <label className="_inpt_titl _mar_b16">
                                  Event Type
                                </label>
                                <Select
                                  className="_M_modal_select"
                                  defaultValue="Online"
                                  style={{ width: 120 }}
                                  onChange={handleChange}
                                >
                                  <Option
                                    className="_crtCrseStng_box1_optn _drpdwn1_li"
                                    value="online"
                                  >
                                    Online
                                  </Option>
                                  <Option
                                    className="_crtCrseStng_box1_optn _drpdwn1_li"
                                    value="offline"
                                  >
                                    Offline
                                  </Option>
                                </Select>
                              </div>
                            </div>
                            <div className="_custom_col_xl_12 custom_col_lg_12 _custom_col_md_12 _custom_col_sm_12">
                              <div className="_M_social_event_modal_bottom">
                                <label className="_inpt_titl _mar_b16">
                                  Event Date
                                </label>
                                <Space direction="vertical">
                                  <DatePicker
                                    placeholder="dd/mm/yyyy"
                                    onChange={onChange}
                                    onOk={onOk}
                                  />
                                </Space>
                              </div>
                            </div>
                            <div className="_custom_col_xl_12 custom_col_lg_12 _custom_col_md_12 _custom_col_sm_12">
                              <div className="_M_social_event_modal_bottom">
                                <label className="_inpt_titl _mar_b16">
                                  Event Time
                                </label>
                                <TimePicker
                                  placeholder="hh/mm/ss"
                                  onChange={onChange}
                                  defaultOpenValue={moment(
                                    "00:00:00",
                                    "HH:mm:ss"
                                  )}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="_custom_col_xl_6 custom_col_lg_6 _custom_col_md_12 _custom_col_sm_12">
                          <label className="_inpt_titl _mar_b16">
                            Desciption
                          </label>
                          <TextArea
                            className="_M_social_event_modal_form_inpt_textarea"
                            rows={13}
                            placeholder="text area..."
                          />
                        </div>
                      </div>
                    </div>
                    <div classs="_custom_row">
                      <div className="_custom_col_xl_12 _custom_col_lg_12 _custom_col_md_12 _custom_col_sm_12">
                        <div className="_M_social_event_modal_btn_grp">
                          <div className="_M_social_event_modal_btn">
                            <Button className="_M_social_event_modal_btn_link">
                              Back
                            </Button>
                          </div>
                          <div className="_M_social_event_modal_btn">
                            <Button className="_M_social_event_modal_btn_link1">
                              Create Event
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <div className="_custom_row">
        <SingleEventRight />
       
        <SingleEventLeft />
      </div>
    </div>
  );
}

export default SingleEvent;
