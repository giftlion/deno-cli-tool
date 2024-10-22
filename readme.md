# Base64 CLI

A simple command-line interface for encoding and decoding text using Base64, built with Deno.

## Features

- Encode plain text to Base64
- Decode Base64 to plain text
- Simple and easy-to-use command-line interface

## Prerequisites

- [Deno](https://deno.land/) installed on your system

## Installation

1. Clone this repository:

   ```
   git clone https://github.com/yourusername/base64-cli.git
   cd base64-cli
   ```

2. run this command:

   ```
   deno install -g --allow-read --allow-net --name=base64 ./main.ts
   ```

   you can change the commnd name from base64 to whatever you want.

3. if you want to uninstall the tool run:
   ```
   deno uninstall -g base64
   ```

## Usage

1. Run the script as below:

   ```
   base64 -h //to get information
   base64 -e "plain text" //to encode the plain text
   base64 -d "encoded text" //to decode the encoded text
   ```
