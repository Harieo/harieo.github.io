const copied = "Copied!";

function copyTag() {
    const tagElement = document.getElementById("discord-tag");
    const contents = tagElement.textContent;
    if (contents !== copied) {
        navigator.clipboard.writeText(contents).catch(reason => console.error(reason));
        tagElement.textContent = copied;
        setTimeout(() => tagElement.textContent = contents, 1000);
    }
}