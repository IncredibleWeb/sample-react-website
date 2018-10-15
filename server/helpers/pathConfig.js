import fs from "fs";
import path from "path";

// retrieves the contents from a file on the file system
export const getFileContents = (files, folder = "") => {
  // concat inline styles for document <head>
  let flattenedContents = "";
  files.forEach(function(file) {
    flattenedContents += fs.readFileSync(
      path.resolve(__dirname) + folder + file
    );
  });

  return flattenedContents;
};

export const defaultPathConfig = {
  meta: {
    title: "Sample"
  },
  inlineStyles: getFileContents(
    ["/inline.css"],
    `/../../${process.env.outputFolder}`
  ),
  remoteStyles: ["/vendor.css", "/style.css"],
  commonScripts: ["/common.js"],
  remoteScripts: ["/main.js"]
};
