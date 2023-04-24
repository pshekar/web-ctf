## Community (TV) Web CTF

By Pranav Shekar

## Description

This challenge is divided into three sequential parts:

## Challenge One
To start the challenge, simply go to localhost:3000/

## Challenge Two
After finishing challenge one, you will be redirected to challenge two. Feel free to use any online tools to help you figure it out.

## Challenge Three
After finishing challenge two, you will be redirected to challenge three. Good luck :)

## Exploit

### Challenge One:
- You need to inspect the source code HTML to find the question that needs to be answered
- You can simply enter the question into Google to find the answer.

### Challenge Two:
- You need to convert the binary into a string using any online converter.
- The string is an excerpt of a script that has a hint hidden inside of it.
- The hint leads you to a permutation of the answer to the challenge as well as robots.txt, where you will use a portion of an /etc/shadow file as well as John the Ripper to find the next answer.

### Challenge Three:
- You can either inspect element or simply scroll down to find the link for a decoder.
- Enter the random string into the decoder and you will have found the flag