const jwt = require("jsonwebtoken");
const authConstants = require("./AuthSecurityConstants");
 
function GetAudience() {
  return authConstants.AudienceAll;
}
exports.GetAudience = GetAudience;

function GetSubject() {
  return (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 
    authConstants.AudienceDev : authConstants.AudienceProd;
}
exports.GetSubject = GetSubject;

function GetRedirect() {
  return (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? 
    authConstants.RedirectDev : authConstants.RedirectProd;
}
exports.GetRedirect = GetRedirect;
