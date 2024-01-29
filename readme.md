# PronounBot
[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/U7U1RLHUW)

PronounBot is a simple Discord bot that allows you to quickly lookup a user's pronouns using PronounDB. It is designed to be easy to use and easy to setup.

## Features

Features

- PronounDB lookup

## Commands
| Command   | Description                             |
|-----------|-----------------------------------------|
| /about    | Shows a simple about screen for the bot |
| /pronouns | Allows you to lookup a user's pronouns  |


## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v12.x or higher)
- npm (Node.js package manager)
- A Discord account and a registered Discord bot

## Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/EpicnessTwo/PronounBot.git
cd PronounBot
```

#### 2. Install Dependencies

Navigate to the project directory and install the required npm packages:

```bash
npm install
```

#### 3. Configuration

Copy config.example.json to config.json:

```bash
cp config.example.json config.json
```

Edit config.json and fill in your Discord bot token, and client id.

#### 4. Start the bot

```bash
node bot.js
```

## Contribution

Feel free to fork the repository and submit pull requests.

## License

This project is licensed under the MIT License.