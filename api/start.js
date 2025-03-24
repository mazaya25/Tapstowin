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
                <meta property="fc:frame:button:1" content="Play Now">
                <meta property="fc:frame:button:1:action" content="post">
                <meta property="fc:frame:post_url" content="https://cointaps.vercel.app/api/game">
                <title>Cointaps Game Started</title>
            </head>
            <body>
                <h1>Game Started!</h1>
            </body>
            </html>
        `);
    } else {
        res.status(405).send('Method Not Allowed');
    }
}
