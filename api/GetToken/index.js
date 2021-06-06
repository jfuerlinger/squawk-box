const { CommunicationIdentityClient } = require('@azure/communication-identity');

module.exports = async function (context, req) {
    context.log('Azure Communication Services - Get Token');

    const connectionString = process.env['COMMUNICATION_SERVICES_CONNECTION_STRING'];

    // Instantiate the identity client
    const identityClient = new CommunicationIdentityClient(connectionString);

    let identityResponse = await identityClient.createUser();
    console.log(`\nCreated an identity with ID: ${identityResponse.communicationUserId}`);

    // Issue an access token with the "voip" scope for an identity
    let tokenResponse = await identityClient.getToken(identityResponse, ["voip"]);
    const { token, expiresOn } = tokenResponse;
    
    console.log(`\nIssued an access token with 'voip' scope that expires at ${tokenResponse.expiresOn}:`);
    console.log(tokenResponse.token);

    context.res = {
        status: 200, /* Defaults to 200 */
        body: {
            token: token,
            expiresOn: expiresOn
        }
    };
}