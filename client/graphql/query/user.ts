import {graphql} from "../../"
export const verifyUserGoogleTokenQuery = `
    query VerifyUserGoogleToken($token: String!){
        verifyGoogleToken(token: $token)
    }
`;