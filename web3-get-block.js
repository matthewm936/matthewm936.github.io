async function getBlockNumber() {
    let block = await web3.eth.getBlockNumber();
    document.getElementById("current-block").innerText = "current block: " + block;
}
getBlockNumber();