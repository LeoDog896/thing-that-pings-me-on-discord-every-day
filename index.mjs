import fs from 'node:fs';

const commonKeys = "a `webhook` key with your webhook URL, a `content` key with the message you want to send, and a `username` key with the username you want to send the message as.";

const configData = fs.readFileSync('config.json', 'utf8');

if (!configData) {
    throw new Error(`Config file is empty! Please make a \`config.json\` file with ${commonKeys}`);
}

const config = JSON.parse(configData);

if (Object.keys(config).length === 0) {
    throw new Error(`Config file is empty! Please add ${commonKeys}`);
}

const { webhook, content, username } = config;

await fetch(webhook, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username,
        avatar_url: "",
        content,
        embeds: []
    })
});
