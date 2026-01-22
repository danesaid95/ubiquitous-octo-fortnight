# Next FTD Project Instructions

## Project Overview
- **Site:** Next FTD - Social media marketing agency
- **Stack:** Next.js 16, TypeScript, Tailwind CSS, Framer Motion
- **Hosting:** Heroku (Basic dyno - $7/mo)
- **DNS:** Cloudflare (free)
- **Email:** Resend (hello@nextftd.com)
- **Domain:** https://www.nextftd.com

## Quick Commands

### Local Development
```bash
npm run dev
```

### Deploy to Production
```bash
git add -A && git commit -m "Your message" && git push origin main && git push heroku main
```

### Check Heroku Status
```bash
heroku ps --app next-ftd
heroku logs --tail --app next-ftd
```

## Environment Variables (Heroku)
- `RESEND_API_KEY` - Resend API key for emails
- `CONTACT_EMAIL` - Where form submissions go (dane.m.said@gmail.com)
- `NODE_ENV` - production

## Deployment Workflow

### Heroku Setup
1. `heroku create app-name --region us`
2. `heroku config:set RESEND_API_KEY=xxx CONTACT_EMAIL=xxx NODE_ENV=production --app app-name`
3. `heroku dyno:type basic --app app-name` (required for custom domains)
4. `heroku domains:add yourdomain.com --app app-name`
5. `heroku domains:add www.yourdomain.com --app app-name`
6. `heroku certs:auto:enable --app app-name`
7. `heroku domains --app app-name` (get DNS targets)

### Cloudflare DNS Setup (when registrar doesn't support ALIAS/ANAME)
1. Sign up at cloudflare.com (free)
2. Add site, select free plan
3. Add CNAME records pointing to Heroku DNS targets:
   - `@` → `xxx.herokudns.com` (Proxied)
   - `www` → `xxx.herokudns.com` (Proxied)
4. Get Cloudflare nameservers
5. Update nameservers at domain registrar (GoDaddy, etc.)
6. Wait 15-60 min for propagation

### Cloudflare SSL Settings
1. SSL/TLS → Overview → Set to "Full"
2. SSL/TLS → Edge Certificates → Enable "Always Use HTTPS"
3. Rules → Page Rules → Redirect root to www:
   - URL: `https://yourdomain.com/*`
   - Forwarding URL (301): `https://www.yourdomain.com/$1`

## Key Files
- `src/data/site-config.ts` - All site content, contact info, services, case studies
- `src/app/api/contact/route.ts` - Contact form API
- `src/app/api/newsletter/route.ts` - Newsletter signup API
- `src/components/layout/` - Header, Footer
- `DEPLOYMENT.md` - Full deployment documentation

## DNS Troubleshooting
```bash
# Check nameservers
dig yourdomain.com NS +short

# Check from different DNS servers
dig yourdomain.com @8.8.8.8 +short  # Google
dig yourdomain.com @1.1.1.1 +short  # Cloudflare

# Flush local DNS cache
# Mac:
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder
# Windows:
ipconfig /flushdns
```

## URLs
- Production: https://www.nextftd.com
- Heroku Direct: https://next-ftd-2949ad717f98.herokuapp.com
- GitHub: https://github.com/danesaid95/ubiquitous-octo-fortnight
