<?php
/**
 * MAGNATE CREATIVE | Elite SPA PHP Router & Fallback
 * 
 * This file acts as a professional-grade gateway for IONOS hosting servers.
 * It serves the compiled index.html with speed, security headers, and error prevention.
 */

// Define paths
$indexHtmlPath = __DIR__ . '/index.html';

// 1. Force HTTPS/SSL at the PHP level as a failsafe
$isHttps = false;
if (isset($_SERVER['HTTPS']) && ($_SERVER['HTTPS'] === 'on' || $_SERVER['HTTPS'] == 1)) {
    $isHttps = true;
} elseif (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {
    $isHttps = true;
}

if (!$isHttps) {
    header("HTTP/1.1 301 Moved Permanently");
    header("Location: https://" . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI']);
    exit;
}

// 2. Strict Security Headers (Grade A compliance)
header("X-Frame-Options: DENY");
header("X-XSS-Protection: 1; mode=block");
header("X-Content-Type-Options: nosniff");
header("Referrer-Policy: strict-origin-when-cross-origin");
header("Strict-Transport-Security: max-age=63072000; includeSubDomains; preload");

// 3. Deliver the React SPA payload
if (file_exists($indexHtmlPath)) {
    // Read and output the compiled HTML directly
    readfile($indexHtmlPath);
    exit;
} else {
    // Professional styled error fallback in case dist/index.html is missing
    header("HTTP/1.1 500 Internal Server Error");
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Configuration Required | Magnate Creative</title>
        <style>
            body {
                background-color: #080808;
                color: #ffffff;
                font-family: 'Sora', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                margin: 0;
                padding: 20px;
                box-sizing: border-box;
                text-align: center;
            }
            .card {
                background-color: #0d0d0d;
                border: 1px solid #ff4d00;
                padding: 40px;
                max-width: 500px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
                border-radius: 4px;
            }
            h1 {
                font-size: 24px;
                margin-top: 0;
                color: #ff4d00;
                text-transform: uppercase;
                letter-spacing: 2px;
            }
            p {
                font-size: 14px;
                line-height: 1.6;
                color: #a0a0a0;
                margin-bottom: 25px;
            }
            .code {
                background-color: #000000;
                padding: 12px;
                font-family: 'JetBrains Mono', monospace;
                font-size: 12px;
                border-left: 3px solid #ff4d00;
                text-align: left;
                margin-bottom: 25px;
                overflow-x: auto;
            }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>Engine Offline</h1>
            <p>The compiled static payload was not found by the server. To launch the agency applet, ensure you build the project and upload the contents of the <code>dist/</code> directory directly to your IONOS webroot.</p>
            <div class="code">
                // Step 1: Run local build<br>
                npm run build<br><br>
                // Step 2: Upload all files inside the "dist" folder
            </div>
        </div>
    </body>
    </html>
    <?php
}
?>
