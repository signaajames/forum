// server.js
import express from 'express';

const app = express();
app.use(express.json());

// Prefer env var in production. Supports either DISCORD_WEBHOOK_URL or dog_var.
const WEBHOOK_URL =
  process.env.DISCORD_WEBHOOK_URL ||
  process.env.dog_var ||
  'https://discord.com/api/webhooks/1440185420205002822/KftqU5u05haDfE_GDIKdZ1Id_UnlRt15NeSgm_yZOiMP61-0SkfLmYgUOz5VT_qJUTk8';

app.post('/api/submit', async (req, res) => {
  if (!WEBHOOK_URL) {
    console.error('DISCORD_WEBHOOK_URL is not set');
    return res.status(500).json({ ok: false, error: 'Server not configured' });
  }

  const { discord, javaName, timeSpent, age, timeZone, about } = req.body;

  const content = [
    '**New application**',
    `Discord: ${discord}`,
    `MC Java: ${javaName}`,
    `Age: ${age}`,
    `Timezone: ${timeZone}`,
    `Playing for: ${timeSpent || 'N/A'}`,
    `About: ${about || 'N/A'}`
  ].join('\n');

  try {
    await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content })
    });

    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
