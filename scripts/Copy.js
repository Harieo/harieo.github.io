const copied = "Copied!";

function copyTag() {
    const tagElement = document.getElementById("discord-tag");
    const contents = tagElement.textContent;
    if (contents !== copied) { // Checks that we're not copying the copied text
        navigator.clipboard.writeText(contents).catch(reason => console.error(reason)); // Copy text to clipboard
        tagElement.textContent = copied; // Set text to the copied text
        setTimeout(() => tagElement.textContent = contents, 1000); // Reset back to what it was originally in 1 second
    }
}