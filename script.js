function visible() {
    console.log("maybe this function works")
    const startSection = document.getElementById('#w11-start-section');
    const input = document.getElementById('#windows-on-off');
    /* if input checkbox is checked, show the start section */
    if (input.checked) {
        startSection.className = 'on';
        console.log('checked');
    } else {
        startSection.className = 'off';
        console.log('disabled');
    }
}
/* dont working tomorrow i will correct */