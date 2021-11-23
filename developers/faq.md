# FAQ

### Question 1 

  I have been trying to instantiate a contract with the contract address for using
  createLock function given in the unlock documentation, but I am not sure which ABI to use, as the ABI given on etherscan given for those contract addresses, does   not seem to work for me

### Answer 

  The contract addresses given in the documentation, represents the proxy contracts, but for using the createLock you need to have the abi of the implementation    contract

  Using this link you can find the ABI of the implementation contract
  https://rinkeby.etherscan.io/address/0x075933675c4d9242e68d519c804b400ade4dafbb#code


### Question 2

  I am not sure what to use for the salt parameter in the createLock function

### Answer

  It is a salt to make sure you can create a “unique” lock even with the same properties

  code : 0x’ + Crypto.randomBytes(12).toString(‘hex’) , this should work fine , for the salt parameter
