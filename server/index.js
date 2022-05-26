//////////////// IMPORTS ////////////////
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import PasswordOrcid from "passport-orcid";
import passport from "passport";
import fileRoutes from "./routes/filesRouter.js";
import usersRoutes from "./routes/usersRouter.js";
import session from "express-session";
//////////////// END IMPORTS ////////////////

//////////////// BASIC APP SETUP ////////////////
const app = express();
app.use(cors());
const PORT = process.env.PORT || 5100;
dotenv.config();
app.use(passport.initialize());
app.use(session({ saveUninitialized: true, resave: true, secret: "foo" }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
//////////////// END BASIC APP SETUP ////////////////

var OrcidStrategy = PasswordOrcid.Strategy;

// Configure the OpenID Connect strategy for use by Passport.
//
// OAuth 2.0-based strategies require a `verify` function which receives the
// credential (`accessToken`) for accessing APIs on the user's behalf, along
// with the user's profile.  The function must invoke `cb` with a user object,
// which will be set at `req.user` in route handlers after authentication.
passport.use(
  new OrcidStrategy(
    {
      sandbox: true, // use the sandbox for non-production environments
      clientID: "APP-8T57XC5SNUMTMANX",
      clientSecret: "3e132e12-bd8e-4811-bcfd-9e48462c76cc",
      callbackURL: "http://localhost:5100/auth/orcid/callback",
    },
    function (accessToken, refreshToken, params, profile, done) {
      // NOTE: `profile` is empty, use `params` instead
      User.findOrCreate({ orcid: params.id }, function (err, user) {
        return done(err, user);
      });
    }
  )
);

app.get("/", function (req, res) {
  res.send('<a href="/auth/orcid/login">Sign in with ORCID</a>');
});
app.get(
  "/auth/orcid/callback",
  passport.authenticate("orcid", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);

app.use("/files", fileRoutes);
app.get("/auth/orcid/login", usersRoutes);

//////////////// DATABASE ////////////////
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("ERROR: ", error.message);
  });
//////////////// END DATABASE ////////////////
