# Unlock Contract

The Unlock contract is a **factory contract**. Its main purpose is to create new locks based on a template. Additionally, it keeps track of locks after they have been created and grants [Unlock tokens](../../governance/the-unlock-token/) when new memberships have been purchased.

As of summer 2021, the unlock contract is **owned** by a multi-sig wallet managed by Unlock Inc. Our goal is to move toward decentralization by transferring ownership of the Unlock contact to [the Unlock DAO](https://github.com/unlock-protocol/docs/tree/7ac44788cf8e3e48d03d421a4b65d6762c39409f/governance/unlock-dao/README.md).

This contract is upgradable using OpenZeppelin's upgradability framework. As of now, the ProxyAdmin is **owned** by a multi-sig wallet managed by Unlock Inc. Our goal is to move toward decentralization by transferring ownership of the Unlock contact to [the Unlock DAO](https://github.com/unlock-protocol/docs/tree/7ac44788cf8e3e48d03d421a4b65d6762c39409f/governance/unlock-dao/README.md). Each implementation is versioned. The method `unlockVersion()` will yield the current version.

Some functions that are deprecated or not implemented yet \(no-op\) have been omitted.

## `createLock`

This function can be invoked by any Ethereum address and creates a new lock using the current template. \(see below\).

```javascript
  function createLock(
    uint _expirationDuration, // Duration for each membership
    address _tokenAddress, // Address of an ERC20 contract used as currency
    uint _keyPrice, // Key price expressed in the ERC20 currency
    uint _maxNumberOfKeys, // Maximum number of memberships which an be purchased
    string calldata _lockName, // Name of the lock
    bytes12 _salt // Unique salt used to compute the counterfactual lock address
  ) external returns(address); // Returns the addres of the lock
```

Once minted, the lock belongs to the caller of the function. The Unlock contract also keeps track of each locks' address.

## `globalBaseTokenURI`

This read-only function does not modify the state and yields the ERC721 base URL for metadata used by the locks. Each lock can override this.

```text
  function globalBaseTokenURI()
    external
    view
    returns(string memory);
```

## `globalTokenSymbol`

This read-only function does not modify the state and yields the ERC721 base token symbol used by the locks. Each lock can override this.

```text
  function globalTokenSymbol()
    external
    view
    returns(string memory);
```

## `chainId`

This read-only function does not modify the state and yields the network id on which this Unlock has been deployed. Some functionnality in the protocol differs based on the network \(related to[ our governance token](../../governance/the-unlock-token/)\).

```text
  function chainId()
    external
    view
    returns(uint);
```

## `configUnlock`

This function modifies the state and sets multiple configuration parameters used by the protocol. It can be called several times in order to change the behavior of the protocol, but only by the owner of the Unlock contract.

```text
  function configUnlock(
    address _udt, // Address of the UDT contract
    address _weth, // Address of the wrapped Ethereum contract*
    uint _estimatedGasForPurchase, // Amount of gas spent for each key purchase. Used to compute the UDT to be minted
    string calldata _symbol, // Symbol of the ERC721 NFT
    string calldata _URI, // Metadata URI for each ERC721
    uint _chainId // network Id
  )
    external;
```

The `_weth` should be the chain's native token ERC20 \(or wrapped as an ERC20\). On Ethereum's main network, it is wrapped Ether for example.

## `setLockTemplate`

This function modifies the state and can only be called by the Unlock contract owner. It sets the template used to deploy locks. The address' should be a lock and its `initialize` and `revokeOwnership` functions will be called.

```text
  function setLockTemplate(
    address payable _publicLockAddress
  ) external;
```

## `resetTrackedValue`

This function modifies the state and can only be called by the Unlock contract owner. It changes the gross network product value as well as the amount of discount granted. \(note: as of summer 2021, it is unclear whether we will ever implement a discount mechanism, as we will let these decisions to the DAO\).

```text
  function resetTrackedValue(
    uint _grossNetworkProduct,
    uint _totalDiscountGranted
  ) external;
```

## `locks`

This read-only function does not modify the state. The Unlock contract keeps track of all locks deployed by the protocol. It can be used to check if a lock was deployed using the protocol and yields a triplet of \(boolean, total exchanged value recorded, amount of UDT yielded by this lock\)

```text
  function locks(address) external view returns(bool deployed, uint totalSales, uint yieldedDiscountTokens);
```

## `setOracle`

This function modifies the state and can only be called by the Unlock contract owner. It adds an oracle to the list of oracles, for a specific token address. Since locks can be deployed using any ERC20, we need on-chain oracles to provide a conversion rate in order to compute the revenue added by each purchase.

```text
  function setOracle(
    address _tokenAddress,
    address _oracleAddress
  ) external;
```

## `transferOwnership`

This function modifies the state and can only be called by the Unlock contract owner. It lets the owner transfer ownership to another address. It is a highly sensitive function as the supplied address will get the full control of the protocol after the transfer. We expect this function to only be called to transfer ownership to DAO contracts.

```text
  function transferOwnership(address newOwner) external;
```

## `renounceOwnership`

This function modifies the state and can only be called by the Unlock contract owner. It renounces ownership of the Unlock contract, thereby removing any functionality that is only available to the owner.

```text
  function renounceOwnership() external;
```

## Other functions

The functions below are getters \(read-only functions\).

```text
  // Total sales recorded by the protocol converted in the chains "native" currency
  function grossNetworkProduct() external view returns(uint);

  // The address of the public lock template, used when `createLock` is called
  function publicLockAddress() external view returns(address);

  // The WETH token address, used for value calculations
  function weth() external view returns(address);

  // The UDT token address, used to mint tokens on referral
  function udt() external view returns(address);

  // The approx amount of gas required to purchase a key
  function estimatedGasForPurchase() external view returns(uint);

  // The version number of the current Unlock implementation on this network
  function unlockVersion() external pure returns(uint16);

  // Returns the address of the current owner
  function owner() external view returns(address);

  // Returns the oracle address for a token address
  function uniswapOracles(address) external view returns(address);
```

