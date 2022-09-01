import React, { useState, useContext } from 'react';
import { Button } from '../../elements/Button/Button';
import { TextField } from '../../../src/elements/TextField/TextField';
import { useContractWrite } from 'wagmi';

export type ContractMintProps = {
  /**
   * Address of contract
   */
  address: string;
  /**
   * chainId of contract
   */
  chainId: string;
};

export const ContractMint = ({ chainId }: ContractMintProps) => {
  const [color, setColor] = useState('Red');

  function mint() {
    setColor('Blue');
  }
  return (
    <div>
      <div>
        <TextField
          placeholder="Enter IPFS Link"
          style={{ width: '30%', marginRight: '10px' }}
        ></TextField>

        <Button onClick={mint}>Mint</Button>
      </div>
    </div>
  );
};
