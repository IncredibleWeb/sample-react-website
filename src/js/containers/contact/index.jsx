import React from "react";
import { connect } from "react-redux";

import ContactForm from "../../components/contact/contactForm";
import reducerInjector from "../../util/reducerInjector";
import { GOOGLEMAPS_IFRAME_URL, TITLE, REDUCER_NAME } from "./constants";
import {
  fetchContact,
  fetchSetValidationMessages,
  submitContact
} from "./actions";
import { contactReducer, getContactState } from "./reducer";
import { getPageState } from "../page/reducer";
import { getAppState } from "../app/reducer";
import { validateContactForm } from "../../../../models/contactForm";
import Map from "../../components/contact/map";

class Contact extends React.PureComponent {
  componentDidMount() {
    const { app, onLoadContact, match } = this.props;
    if (app.url !== match.url) {
      onLoadContact({ url: match.url });
    }
  }
  render() {
    const {
      formValues,
      messages,
      isSuccess,
      isError,
      errorMessage,
      onSetValidationMessages,
      onSubmitContact
    } = this.props;
    return (
      <section className="contact">
        <div className="section-wrapper">
          <div className="section section-left">
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
          <div className="section section-right">
            <Map src={GOOGLEMAPS_IFRAME_URL} frameBorder={"0"} title={TITLE} />
          </div>
        </div>
        <hr />
      </section>
    );
  }

  static fetchData(store, { match }) {
    return store.dispatch(fetchContact({ url: match.path }));
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
    app: getAppState(state).toJS(),
    ...getContactState(state).toJS()
  };
};

// specifies the behaviour, which callback prop dispatches which action
const mapDispatchToProps = dispatch => ({
  onLoadContact: data => dispatch(fetchContact(data)),
  onSubmitContact: data => dispatch(submitContact(data)),
  onSetValidationMessages: data => dispatch(fetchSetValidationMessages(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reducerInjector(REDUCER_NAME, contactReducer)(Contact));
