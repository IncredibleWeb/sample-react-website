import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ContactForm from "../../components/contact/contactForm";
import reducerInjector from "../../util/reducerInjector";
import { GOOGLEMAPS_IFRAME_URL, TITLE, REDUCER_NAME } from "./constants";
import {
  fetchContactSection,
  fetchSetValidationMessages,
  submitContact
} from "./actions";
import { contactReducer, getContactState } from "./reducer";
import { validateContactForm } from "../../../../models/contactForm";
import Map from "../../components/contact/map";

class ContactSection extends React.PureComponent {
  componentDidMount() {
    const { contactSection, onLoadContactSection } = this.props;
    if (!contactSection) {
      onLoadContactSection();
    }
  }

  render() {
    const {
      contactSection,
      isMinimised,
      formValues,
      messages,
      isSuccess,
      isError,
      errorMessage,
      onSetValidationMessages,
      onSubmitContact
    } = this.props;

    return (
      <div className="contact">
        {contactSection && (
          <div className="contact-section">
            <div className="contact-section-row">
              {contactSection &&
                isMinimised && (
                  <div className="two-column">
                    <h2 className="contact-section-title">
                      {contactSection.title}
                    </h2>
                  </div>
                )}
              <div className="two-column">
                <div className="description-row">
                  {contactSection.items.map((n, index) => (
                    <div className="two-column" key={index}>
                      <div className="item-title">{n.title}</div>
                      <div className="item-text">{n.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="contact-section-card">
              <div className="section-wrapper contact-section-form">
                <div className="section section-left contact-section-col">
                  <ContactForm
                    messages={messages}
                    initialValues={formValues}
                    isSuccess={isSuccess}
                    isError={isError}
                    errorMessage={errorMessage}
                    onSubmit={e => {
                      const formValues = e.toJS();
                      validateContactForm(formValues).then((errors, values) => {
                        if (!errors) {
                          onSubmitContact(formValues);
                        } else {
                          onSetValidationMessages({ messages: errors });
                        }
                      });
                    }}
                  />
                </div>
                <div className="section section-right contact-section-col">
                  <Map
                    src={GOOGLEMAPS_IFRAME_URL}
                    frameBorder={"0"}
                    title={TITLE}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  static fetchData(store) {
    return store.dispatch(fetchContactSection());
  }

  static fetchMessages(store, data) {
    return store.dispatch(fetchSetValidationMessages(data));
  }

  static getReducer() {
    return { key: REDUCER_NAME, reducer: contactReducer };
  }
}

// maps the redux store state to the props related to the data from the store
const mapStateToProps = state => {
  return {
    ...getContactState(state).toJS()
  };
};

// specifies the behaviour, which callback prop dispatches which action
const mapDispatchToProps = dispatch => ({
  onSubmitContact: data => dispatch(submitContact(data)),
  onSetValidationMessages: data => dispatch(fetchSetValidationMessages(data)),
  onLoadContactSection: data => dispatch(fetchContactSection(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reducerInjector(REDUCER_NAME, contactReducer)(ContactSection));
