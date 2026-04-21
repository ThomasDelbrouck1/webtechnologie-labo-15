function nameFromEmail(email) {
    const namePart = email.split("@")[0];
    const namePieces = namePart.split(".");
    return namePieces.join(" ").toUpperCase();
}

let email = prompt("Geef uw email:");

while (email !== null && email !== "") {
    console.log(`De eigenaar van ${email} heet ${nameFromEmail(email)}`);
    email = prompt("Geef uw email: (leeg = programma stopt)");
}
