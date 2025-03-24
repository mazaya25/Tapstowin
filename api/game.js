export default function handler(req, res) {
 if (req.method === 'POST') {
 res.setHeader('Content-Type', 'text/html');
 res.status(200).send(`
 <!DOCTYPE html>
 <html lang="en">
 <head>
 <meta charset="UTF-8">
 <meta property="fc:frame" content="vNext">
 <meta property="fc:frame:image" content="https://cointaps.xyz/preview.png">
 <!-- Oyun HTML'sini buraya gömebiliriz, ama şu an basit bir test için -->
 <title>Cointaps Game</title>
 </head>
 <body>
 <h1>Cointaps Game Running Inside Warpcast!</h1>
 <p>Burada oyun içeriği olmalı.</p>
 </body>
 </html>
 `);
 } else {
 res.status(405).send('Method Not Allowed');
 }
}
