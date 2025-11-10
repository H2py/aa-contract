//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.28;

interface IEntryPoint {
    function depositTo(address account) external payable;
}

interface IAccount {
    function ValidateUserOp (
        bytes32 userOpHash,
        uint256 missingAccountFunds
    ) external returns(uint256 validationData);
}