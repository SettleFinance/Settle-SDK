const jwt = require("jsonwebtoken");
const authConstants = require("./AuthSecurityConstants");
const authHelper = require("./AuthSecuritHelper");

var AuthSecurity = {

  GetGuidFromIdentityProof: (token) => { //token - JWT token, audience - for whom token was issued, issuer - by whom token was issued
    audience = authHelper.GetAudience();
    subject = authHelper.GetSubject();

    if(!audience) {
      throw "Audience is NOT defined."
    }

    if(!subject) {
      throw "Subject is NOT defined."
    }

    return new Promise(async (resolve, reject) => {
      try
      {
        var decoded = await jwt.verify(
          token, 
          authConstants.Certyficate, 
          {  
            audience: audience, //for whom token is issued (* - everyone)
            issuer: authConstants.Issuer, //by whom token is issued
            subject: subject //issuance subject
          });

          if(decoded == undefined || !decoded.nameid) {
            //console.log("AuthSecurity.VerifyToken => failure:"); console.log(decoded); //debug only
            throw "JWT verification failed, token did NOT contain 'nameid' claim."
          }

          //console.log("AuthSecurity.VerifyToken => success:"); console.log(decoded); //debug only
          resolve(decoded.nameid); //GUID
      }
      catch(e) {
        //console.log("AuthSecurity.VerifyToken => error:"); console.log(e); //debug only
        reject(e);
      }
    });
  }
}

module.exports = AuthSecurity;
