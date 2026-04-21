function printTextBox(text) {
    const border = "*".repeat(text.length + 4);

    console.log(border);
    console.log(`| ${text} |`);
    console.log(border);
}

printTextBox("HELLO WORLD");
printTextBox("HALLO WERELD");
printTextBox("HOLA MUNDO");
