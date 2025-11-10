// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract MinimalFixedSupplyToken {
    string public constant name = "My Hardhat Token";
    string public constant token = "MHT";
    uint8 public constant decimals = 18;
    uint256 public immutable totalSupply;
}