export const msalConfig = {
    auth: {
      clientId: "be8e526e-35c4-4867-ab60-30f53b14d942",
      authority: "https://login.microsoftonline.com/86b5b2a1-375f-4c5f-885e-2b4fcbad43e6",
      redirectUri: "http://audit.ncc1701d.xyz",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };
  
  // Add scopes here for ID token to be used at Microsoft identity platform endpoints.
  export const loginRequest = {
   scopes: ["User.Read"]
  };
  
  // Add the endpoints here for Microsoft Graph API services you'd like to use.
  export const graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
  };