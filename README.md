# Emend AI

A GPT3 Email Generator using [OpenAI](https://beta.openai.com/docs/introduction).
<br />
Type in a text summary of your email, and GPT3 will re-write your summary into a professional email.

## Usage

```bash
$ git clone git@github.com:brysonbw/emend-ai.git

$ cd emend-ai

$ rm -rf .git

$ yarn
```

## Generate Open AI API Key
```bash
$ cp .env.example .env.local # or .env instead of .env.local

# create account and generate API Key
https://beta.openai.com/account/api-keys

#.env.local
OPENAI_API_KEY=<ENTER_YOUR_API_KEY>
```

## Developing

```bash
$ yarn dev

Open http://localhost:3000 with your browser to see the result.
```
