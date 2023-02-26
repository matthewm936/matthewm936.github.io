const web3 = new Web3("https://eth.getblock.io/ab1cbdf4-e50a-439f-bf7b-7eecbe4886a1/mainnet/");
            
//uses web3 object (thats connected to a copy blockchain) to log version and current block
const version = web3.version;
document.getElementById("web3-version").innerText = "Web3 version: " + version;



