export default function handler(req, res) {
    if (req.method === 'POST') {
        // Warpcast'ten gelen POST isteğini işleme
        const { untrustedData } = req.body;
        const userFid = untrustedData?.fid || 'unknown'; // Kullanıcı ID'sini al (örnek)

        // Yanıt olarak yeni bir Frame meta etiketi döndür
        res.status(200).send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta property="fc:frame" content="vNext">
                <meta property="fc:frame:image" content="https://cointaps.xyz/preview.png">
                <meta property="fc:frame:button:1" content="Play Now">
                <meta property="fc:frame:button:1:action" content="link">
                <meta property="fc:frame:button:1:target" content="https://cointaps.vercel.app/index.html">
                <title>Cointaps Game Started</title>
            </head>
            <body>
                <h1>Game Started for FID: ${userFid}!</h1>
            </body>
            </html>
        `);
    } else {
        res.status(405).send('Method Not Allowed');
    }
}
