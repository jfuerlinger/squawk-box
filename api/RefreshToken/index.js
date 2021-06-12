const { CommunicationIdentityClient } = require('@azure/communication-identity');

module.exports = async function (context, req) {
    context.log('Azure Communication Services - Refresh Token');
    // // Value of identityResponse represents the Azure Communication Services identity stored during identity creation and then used to issue the tokens being refreshed
    let refreshedTokenResponse = await identityClient.getToken(identityResponse, ["voip"]);
}