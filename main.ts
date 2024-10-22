import { parse } from "https://deno.land/std@0.190.0/flags/mod.ts";

const { encode, decode, help } = parse(Deno.args, {
  boolean: ["encode", "decode", "help"],
  alias: {
    encode: "e",
    decode: "d",
    help: "h",
  },
});


if (help) {
  console.log(`
    Base64 CLI

    Encode or decode text using Base64.

    Options:
    -e, --encode   Encode text to Base64
    -d, --decode   Decode Base64 to text
    -h, --help     Show this help message
  `);
  Deno.exit(0);
}

const text = Deno.args[Deno.args.length - 1];

if (encode) {
  console.log(btoa(text));
} else if (decode) {
  console.log(atob(text));
} else {
  console.error("You must specify either --encode or --decode");
  Deno.exit(1);
}
