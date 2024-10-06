document.getElementById('copy-button').addEventListener('click', function() {
    const textToCopy = document.querySelector('.text-box').textContent;
    navigator.clipboard.writeText(textToCopy).then(() => {
        const copyButton = document.getElementById('copy-button');
        copyButton.textContent = 'Copied!';

        setTimeout(() => {
            copyButton.textContent = 'Copy';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});
