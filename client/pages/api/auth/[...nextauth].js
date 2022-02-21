import CredentialsProvider from "next-auth/providers/credentials"
import NextAuth from "next-auth"

export default NextAuth({
providers: [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Credentials',
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: {  label: "Password", type: "password", placeholder: "password"}
    },
    async authorize (credentials)  {
      // You need to provide your own logic here that takes the credentials
      // submitted and returns either a object representing a user or value
      // that is false/null if the credentials are invalid.
      // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
      // You can also use the `req` object to obtain additional parameters
      // (i.e., the request IP address)
      
      const user = {id:1, name: "Admin", email: "" , password:"pass123"}
        //database look up 
      if (credentials.username === user.name && credentials.password === user.password) {
        // Any object returned will be saved in `user` property of the JWT
        console.log("credentials matched")
        return user
      } else {
        // If you return null then an error will be displayed advising the user to check their details.
        return null
        
        // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter        
      }

    }
  })
],
callback: {
    jwt:  ({ token, user }) => {
        //first time jwt callback is run, user object is saved
        if(user){
            token.id = user.id;
        }
        return token;
    }, 
    session: ({ session,token }) => {
        if(token){
            session.id = token.id;
        }
        return session;
    }
},
secrete: "test",
jwt: {  
    secrete: "test",
    encryption: true,
},
pages:{
    // signIn: '/signin',
    // signIn: 'credentials-signin'
    // newUser: "/profile"
}
});