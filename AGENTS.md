# OCOF deployment workflow

- This checkout is the source of truth for `ocof.vercel.app`.
- Before changes that depend on prior decisions, retrieve selective OCOF context with Jarvis Memory.
- After an approved change, run the relevant checks, commit the change on `main`, and push to `origin/main`.
- Vercel is connected to `euthiagobusiness-spec/OCOF`; a successful push to `main` triggers the production deploy automatically.
- Verify the production deployment at `https://ocof.vercel.app` after each push.
- Never store credentials, tokens, or secrets in this repository or in Jarvis Memory.
