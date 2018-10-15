import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ExecutionEnvironment from "exenv";

import Social from "../../components/social/social";
import reducerInjector from "../../util/reducerInjector";
import {
  fetchCredits,
  fetchSocial,
  fetchQuickLinks,
  fetchFooter
} from "./actions";
import { LOGO_DESCRIPTION, REDUCER_NAME } from "./constants";
import { footerReducer, getFooterState } from "./reducer";

class Footer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      canUseDOM: false
    };
  }
  componentDidMount() {
    this.setState({
      canUseDOM: ExecutionEnvironment.canUseDOM
    });
  }
  render() {
    const { credits, quickLinks, social, footer } = this.props;
    let logoSrc = "/img/logo.png";

    if (this.state.canUseDOM) {
      if (window.matchMedia("screen and (min-width: 54em)").matches) {
        logoSrc = "/img/logo-blue.png";
      }
    }
    const logo = {
      src: logoSrc,
      alt: LOGO_DESCRIPTION,
      title: LOGO_DESCRIPTION
    };
    return (
      <footer>
        <div className="footer-wrapper">
          <div className="footer-content">
            <div className="footer-summary">
              <Link to="/">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="logo"
                />
              </Link>
              <div
                className="text"
                dangerouslySetInnerHTML={{ __html: footer.summary }}
              />
            </div>
            <ul className="quick-links">
              {quickLinks.map(n => (
                <li key={n.id} className={"quick-link"}>
                  <h3>{n.title}</h3>
                  <ul className="quick-link-links">
                    {n.links.slice(0, 5).map(m => (
                      <li key={m.url} className="item">
                        {m.isInternal && (
                          <Link
                            to={m.url}
                            target={m.isNewWindow ? "_blank" : ""}
                            className="link"
                          >
                            {m.title}
                          </Link>
                        )}
                        {!m.isInternal && (
                          <a
                            href={m.url}
                            target={m.isNewWindow ? "_blank" : ""}
                            rel="noopener"
                            className="link"
                          >
                            {m.title}
                          </a>
                        )}
                      </li>
                    ))}

                    {n.links.length > 5 && (
                      <li className="item ellipsis">&#8226;&#8226;&#8226;</li>
                    )}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <Social links={social} />
          <div
            className="credits"
            dangerouslySetInnerHTML={{ __html: credits }}
          />
        </div>
      </footer>
    );
  }

  static fetchData(store) {
    return Promise.all([
      store.dispatch(fetchCredits()),
      store.dispatch(fetchSocial()),
      store.dispatch(fetchQuickLinks()),
      store.dispatch(fetchFooter())
    ]);
  }

  static getReducer() {
    return { key: REDUCER_NAME, reducer: footerReducer };
  }
}

// maps the redux store state to the props related to the data from the store
const mapStateToProps = state => getFooterState(state).toJS();

// specifies the behaviour, which callback prop dispatches which action
const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reducerInjector(REDUCER_NAME, footerReducer)(Footer));
