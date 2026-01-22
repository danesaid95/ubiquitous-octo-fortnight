# Next FTD Deployment Guide

## Overview

- **Hosting:** Heroku (Basic dyno - $7/mo)
- **DNS:** Cloudflare (free)
- **SSL:** Cloudflare (automatic)
- **Email:** Resend (hello@nextftd.com)
- **Domain:** nextftd.com

---

## 1. Heroku Setup

### Create Heroku App
```bash
heroku create next-ftd --region us
```

### Set Environment Variables
```bash
heroku config:set RESEND_API_KEY=your_resend_api_key CONTACT_EMAIL=your_email@gmail.com NODE_ENV=production --app next-ftd
```

### Upgrade to Basic Dyno (required for custom domains)
```bash
heroku dyno:type basic --app next-ftd
```

### Deploy
```bash
git push heroku main
```

### Add Custom Domains
```bash
heroku domains:add nextftd.com --app next-ftd
heroku domains:add www.nextftd.com --app next-ftd
```

### Enable SSL
```bash
heroku certs:auto:enable --app next-ftd
```

### Get DNS Targets
```bash
heroku domains --app next-ftd
```

This outputs DNS targets like:
- `nextftd.com` → `computational-snake-xxx.herokudns.com`
- `www.nextftd.com` → `current-lilac-xxx.herokudns.com`

---

## 2. Cloudflare Setup (DNS)

### Why Cloudflare?
GoDaddy (and many registrars) don't support ALIAS/ANAME records for root domains and lock A records. Cloudflare provides:
- Free DNS hosting
- CNAME flattening for root domains
- Free SSL certificates
- DDoS protection

### Steps

1. **Sign up** at [cloudflare.com](https://cloudflare.com) (free)

2. **Add your site** → Enter `nextftd.com`

3. **Select Free plan**

4. **Add DNS Records:**

   | Type | Name | Content | Proxy |
   |------|------|---------|-------|
   | CNAME | `@` | `computational-snake-xxx.herokudns.com` | Proxied (orange) |
   | CNAME | `www` | `current-lilac-xxx.herokudns.com` | Proxied (orange) |

5. **Get Cloudflare Nameservers** (e.g., `tina.ns.cloudflare.com`, `benedict.ns.cloudflare.com`)

6. **Update Nameservers at GoDaddy:**
   - GoDaddy → My Products → Domain → Nameservers → Change
   - Enter Cloudflare nameservers
   - Wait 15-60 minutes for propagation

### Cloudflare SSL Settings

1. **SSL/TLS → Overview** → Set to **Full**
2. **SSL/TLS → Edge Certificates** → Enable **Always Use HTTPS**
3. **SSL/TLS → Edge Certificates** → Enable **Automatic HTTPS Rewrites**

### Redirect Root to WWW (Page Rule)

1. **Rules → Page Rules → Create Page Rule**
2. URL: `https://nextftd.com/*`
3. Setting: **Forwarding URL (301)**
4. Destination: `https://www.nextftd.com/$1`

---

## 3. Useful Commands

### Check DNS Propagation
```bash
dig nextftd.com NS +short
dig www.nextftd.com +short
```

### Check from Multiple DNS Servers
```bash
dig nextftd.com @8.8.8.8 +short    # Google DNS
dig nextftd.com @1.1.1.1 +short    # Cloudflare DNS
```

### Flush Local DNS Cache
```bash
# Mac
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

# Windows
ipconfig /flushdns
```

### Heroku Logs
```bash
heroku logs --tail --app next-ftd
```

### Heroku Status
```bash
heroku ps --app next-ftd
```

### Redeploy
```bash
git push heroku main
```

---

## 4. URLs

- **Production:** https://www.nextftd.com
- **Heroku Direct:** https://next-ftd-2949ad717f98.herokuapp.com
- **GitHub Repo:** https://github.com/danesaid95/ubiquitous-octo-fortnight

---

## 5. Troubleshooting

### "File not found (404)" from GoDaddy
- DNS still pointing to GoDaddy servers
- Check nameservers: `dig nextftd.com NS +short`
- Should show Cloudflare nameservers, not `domaincontrol.com`

### SSL Certificate Errors
- Wait for DNS propagation (15-60 min)
- Check Cloudflare SSL is set to "Full"
- Verify Heroku SSL: `heroku certs:auto --app next-ftd`

### Site Not Updating After Deploy
```bash
heroku restart --app next-ftd
```

---

## 6. Monthly Costs

| Service | Cost |
|---------|------|
| Heroku Basic Dyno | $7/mo |
| Cloudflare DNS | Free |
| Cloudflare SSL | Free |
| GoDaddy Domain | ~$12/year |
| Resend Email | Free tier |

**Total:** ~$7/month + domain renewal
