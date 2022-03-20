let count = 0;
process.on('message', (msg) => {
    console.log('child_process:', count++);
})