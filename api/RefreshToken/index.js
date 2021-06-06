const { CommunicationIdentityClient } = require('@azure/communication-identity');

module.exports = async function (context, req) {
    context.log('Azure Communication Services - Refresh Token');

    // const name = (req.query.name || (req.body && req.body.name));
    // const responseMessage = name
    //     ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    //     : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    // context.res = {
    //     // status: 200, /* Defaults to 200 */
    //     body: responseMessage
    // };

    // // Value of identityResponse represents the Azure Communication Services identity stored during identity creation and then used to issue the tokens being refreshed
    let refreshedTokenResponse = await identityClient.getToken(identityResponse, ["voip"]);
}