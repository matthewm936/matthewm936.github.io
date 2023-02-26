function search() {
    let input = document.getElementById("searchBar").value;
    logBalance(input);
} 

async function logBalance(input) {
    console.log(input);
    let balance = await web3.eth.getBalance(input);
    console.log(balance / 1000000000000000000 + " balance in ether");
    alert(balance / 1000000000000000000 + " balance in ether");

    //0x00000000219ab540356cBB839Cbe05303d7705Fa
    //ethereum account with largest eth balance
    //from etherscan.io
}
