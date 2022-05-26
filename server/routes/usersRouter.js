import express from "express";
import passport from "passport";
const router = express.Router();

router.get("/orcid/login", () => {
  console.log("BUGGG!!!???");
});
// finish authenticating with ORCID
router.get(
  "/orcid/callback",
  passport.authenticate("orcid", {
    successRedirect: "/",
    failureRedirect: "/auth",
  })
);

export default router;
