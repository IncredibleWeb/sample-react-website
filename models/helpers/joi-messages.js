const defaultOptions = {
  singleErrorPerField: false
};

export default class JoiMessages {
  static transform(errors, values, validationMessages, options) {
    validationMessages = validationMessages || {};
    options = Object.assign(defaultOptions, options);

    let userFriendlyMessages = {};
    let fields = [];

    for (let i = errors.length - 1; i >= 0; i--) {
      let error = errors[i];

      // only show a single error per field
      if (options.singleErrorPerField && fields.indexOf(error.path) > -1) {
        continue;
      }
      // keep track of the fields which have already been validated
      fields.push(error.path);

      const errorPath = error.path.filter(n => isNaN(n)).join(".");
      // init user friendly messages
      userFriendlyMessages[error.path] = [];
      if (validationMessages[errorPath]) {
        // check if there is a custom error
        let errorMessage = validationMessages[errorPath][error.type];
        if (errorMessage) {
          // replace context variables
          for (let property in error.context) {
            if (error.context.hasOwnProperty(property)) {
              let regex = new RegExp(`{{${property}}}`, "g");
              errorMessage = errorMessage.replace(
                regex,
                error.context[property]
              );
            }
          }

          // create a custom message object
          let errorMessageObject = {
            type: error.type,
            message: errorMessage
          };
          // write a custom message object
          userFriendlyMessages[error.path].push(errorMessageObject);
        } else {
          // fallback to the default implementation
          userFriendlyMessages[error.path].push({
            type: error.type,
            message: error.message
          });
        }
      } else {
        // fallback to the default implementation
        userFriendlyMessages[error.path].push({
          type: error.type,
          message: error.message
        });
      }
    }
    return userFriendlyMessages;
  }
}
