# Environment & Deployment

## Static prototype
The existing `index.html` concept site can be deployed to Vercel as a static site with no build command. Keep it as a reference while implementing the app.

## Full-stack app
1. Create a separate branch and preserve the static reference.
2. Set up framework and package manager.
3. Add `.env.example` with placeholders only.
4. Provision development database and run migrations.
5. Seed only fictitious demo records.
6. Configure preview deployment separately from production.
7. Verify demo mode is forced on in preview and all external provider adapters are fake by default.
8. Add auth and server-side access controls before real user records.
9. Add production secrets only in hosting secret settings.
10. Run tests and smoke test the deployed URL.

## Environment variables (examples; names may change)
```env
NODE_ENV=development
APP_BASE_URL=http://localhost:3000
DATABASE_URL=
AUTH_SECRET=
AUTH_BASE_URL=http://localhost:3000
DEMO_MODE=true
NOTIFICATION_PROVIDER=fake
EMAIL_PROVIDER_API_KEY=
SMS_PROVIDER_API_KEY=
DEVICE_INGESTION_SECRET=
```

Do not commit populated secrets. Keep demo mode true until explicit review. Production startup should fail safely if real integrations are partially configured or safety prerequisites are absent.

## Deployment checklist
- [ ] Build passes.
- [ ] Lint/typecheck/tests pass.
- [ ] No secrets in repository or client bundle.
- [ ] Demo disclosures visible.
- [ ] External provider calls disabled in demo.
- [ ] Database migrations applied.
- [ ] Seed data is fictitious.
- [ ] Authz tests pass.
- [ ] Logs redact personal/health/location data.
- [ ] Error monitoring and rollback plan documented.
- [ ] Mobile layout and accessibility smoke tests completed.
