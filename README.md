# Decoder Ring Project
## Description
This is my project where I've implemented a Decoder Ring that encodes and decodes using three ciphers. I've also written my own test cases following the principles of TDD (Test Driven Development) to help me in my development of this project.

### List of ciphers

#### 1. **Caesar Shift**

![image](https://user-images.githubusercontent.com/72702240/164184212-44412391-b699-48bd-8ff8-11ec5f506b89.png)


The Caesar shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the typical alphabetic order.

For example, if you were to "shift" the alphabet to the right by `3`, the letter `A` would become `D`.

`"thinkful" -> "wklqnixo`

When decoding the message, you need to know the number the original message was shifted by so that you can shift in the opposite direction.

#### 2. **Polybius Square**
	
![image](https://user-images.githubusercontent.com/72702240/164185648-72f68455-5cd3-4fba-bd3a-ae4c1b67add0.png)

The Polybius square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. For example, in the above table, the letter `B` would be represented by the numerical pair `21`.

Typically, it is possible to arrange the letters however you like and read off the coordinates in whatever direction you like. In this example, the grid will be arranged as above and coordinates will be read by comparing the first digit to the number on the top of the table and the second digit to that on the left.

`"thinkful" -> "4432423352125413"`

#### 3. **Substitution Cipher**

The substitution cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message.

For example, in the image above, the word `HELLO` would be translated as follows:

- H becomes R.
- E becomes M.
- L becomes W.
- O becomes L.

This would result in the code `RMWWL`. To decrypt this code, you would simply take the result and transpose back from the substitution alphabet to the standard alphabet.
