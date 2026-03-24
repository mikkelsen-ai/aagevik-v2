# Chatbot Setup – Terje Mikkelsen Tannlegesenter

Denne guiden forklarer hvordan du setter opp AI-chatboten som er koblet til n8n og Anthropic Claude.

---

## Krav

- **n8n** (self-hosted eller n8n Cloud) – [n8n.io](https://n8n.io)
- **Anthropic API-nøkkel** – [console.anthropic.com](https://console.anthropic.com)
- **E-postkonto** – Gmail, Outlook, eller SMTP-server

---

## Steg 1: Importer n8n-workflowen

1. Åpne n8n og gå til **Workflows**
2. Klikk **Import from file**
3. Velg filen `n8n-workflow-chatbot.json` fra prosjektet
4. Workflowen importeres med alle noder konfigurert

---

## Steg 2: Konfigurer Anthropic API

1. I n8n, gå til **Credentials** → **Add credential**
2. Velg **Anthropic API**
3. Lim inn din API-nøkkel fra [console.anthropic.com](https://console.anthropic.com)
4. Lagre som `"Anthropic API"`
5. I workflowen, åpne **Claude AI**-noden og koble til de nye credentials

---

## Steg 3: Aktiver workflowen og kopier webhook-URL

1. Åpne **Webhook**-noden i workflowen
2. Kopier **Production URL** (ser slik ut: `https://din-n8n.com/webhook/terje-chat`)
3. Aktiver workflowen med **Active**-togglen øverst til høyre

---

## Steg 4: Legg til webhook-URL i Vercel

1. Gå til ditt Vercel-prosjekt → **Settings** → **Environment Variables**
2. Legg til:
   - **Name:** `NEXT_PUBLIC_N8N_WEBHOOK_URL`
   - **Value:** URL-en du kopierte i steg 4
3. Velg **Production** (og gjerne **Preview**)
4. Klikk **Save**
5. Gjør en ny deploy: **Deployments** → **Redeploy**

---

## Steg 5: Test lokalt

1. Kopier `.env.example` til `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Oppdater `NEXT_PUBLIC_N8N_WEBHOOK_URL` med din n8n webhook-URL
3. Start utviklingsserveren:
   ```bash
   npm run dev
   ```
4. Åpne [http://localhost:3000](http://localhost:3000)
5. Klikk chatbot-ikonet nederst til høyre
6. Send en testmelding og verifiser at du får svar

---

## CORS-konfigurasjon i n8n

Dersom n8n er self-hosted, må du tillate requests fra produksjonsdomenet ditt.

Legg til i n8n's miljøvariabler (`.env` eller Docker-konfig):

```
WEBHOOK_URL=https://din-n8n.com/
N8N_CORS_ENABLE=true
N8N_CORS_ALLOWED_ORIGINS=https://mikkelsen-tannklinikk.no,http://localhost:3000
```

For n8n Cloud håndteres CORS automatisk.

---

## Feilsøking

| Problem | Løsning |
|---|---|
| «Beklager, noe gikk galt» i chatten | Sjekk at webhook-URL er riktig og at workflowen er aktiv |
| Ingen e-post ved booking | Sjekk e-post-credentials i n8n og sjekk n8n-loggene |
| CORS-feil i nettleserkonsollen | Se CORS-seksjonen over |
| Claude svarer på engelsk | Sjekk at system-prompten er korrekt i Claude AI-noden |
| Webhook returnerer 404 | Verifiser at workflowen er **aktiv** (ikke bare lagret) |

---

## Modell

Workflowen bruker `claude-sonnet-4-5`. Du kan bytte til en annen modell i **Claude AI**-noden:
- `claude-opus-4-6` – kraftigere, tregere
- `claude-haiku-4-5-20251001` – raskere, billigere
