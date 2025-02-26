const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('34da2804e995da747cde8d457ee413203e12251ea33ae6aa25d16adc10a54e09');
const myWalletAddress = myKey.getPublic('hex');


let testCoin = new Blockchain();

console.log('\n Starting the miner...');
testCoin.minePendingTransactions(myWalletAddress);

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
testCoin.addTransaction(tx1);

console.log('\n Starting the miner again...');
testCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of candy is', testCoin.getBalanceOfAddress(myWalletAddress));

console.log('\n Is chain valid?', testCoin.isChainValid() ? 'Yes' : 'No');