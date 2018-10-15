import {
  SET_VALIDATION_MESSAGES,
  SET_SUCCESS,
  SET_ERROR,
  SET_LOADING,
  SET_CONTACT_SECTION
} from "./constants";
import { renderPage } from "../page/actions";
import Api from "../../../../service/main";

const setValidationMessages = data => ({
  type: SET_VALIDATION_MESSAGES,
  data
});

const setSuccess = () => ({
  type: SET_SUCCESS
});

const setError = data => ({
  type: SET_ERROR,
  data
});

const isLoading = data => ({
  type: SET_LOADING,
  data
});

const loadContactSection = data => ({
  type: SET_CONTACT_SECTION,
  data
});
export const fetchContactSection = data => dispatch => {
  dispatch(isLoading(true));
  return Api.contact
    .getPage(data)
    .then(response => {
      dispatch(loadContactSection(response));
      return response;
    })
    .then(response => {
      dispatch(isLoading(false));
      return response;
    })
    .catch(error => {
      dispatch(isLoading(false));
      dispatch(setError(true));
    });
};

const getContact = data => dispatch =>
  Api.contact
    .getPage(data)
    .then(response => {
      return response;
    })
    .catch(error => {
      throw error;
    });

export const fetchContact = data => dispatch =>
  renderPage({ get: getContact, data })(dispatch);

export const submitContact = data => dispatch =>
  Api.contact
    .submit(data)
    .then(response => {
      dispatch(isLoading(false));
      dispatch(setSuccess());
      return response;
    })
    .catch(error => {
      dispatch(isLoading(false));
      dispatch(setError({ errorMessage: error }));
    });

export const fetchSetValidationMessages = data => dispatch =>
  dispatch(setValidationMessages(data));
