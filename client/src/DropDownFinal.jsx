import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import './ddf.css'

function Dropp({selectedChain, onChainSelected }) {
    const monede = [
        'Bitcoin (BTC)',
        'Ethereum (ETH)',
        'Binance Coin (BNB)',
        'Cardano (ADA)',
        'Solana (SOL)',
        'XRP (XRP)',
        'Polkadot (DOT)',
        'Dogecoin (DOGE)',
        'Avalanche (AVAX)',
        'Chainlink (LINK)',
        'Litecoin (LTC)',
        'Bitcoin Cash (BCH)',
        'Stellar (XLM)',
        'VeChain (VET)',
        'Filecoin (FIL)',
        'Uniswap (UNI)',
        'Cosmos (ATOM)',
        'Terra (LUNA)',
        'Tron (TRX)',
        'Dash (DASH)'
      ];
  //const [selectedChain, setSelectedChain] = useState('Bitcoin (BTC)'); // State for selected item text
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu open/close

  const handleDropdownSelect = (text) => {
    onChainSelected(text); // Update selected item text
    setIsMenuOpen(false); // Close the dropdown menu after selecting an item
};

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the dropdown menu open/close
  };

  return (
    <div style={{ display: 'block', width: '300px', padding: '30px', position: 'relative' }}>
      
      <Dropdown show={isMenuOpen} onSelect={handleDropdownSelect} 
      style={{
        left:'20px',
        padding:'10px'
      }}>
        <Dropdown
          variant="success"
          onClick={toggleMenu}
          
          style={{
            width: '230px',
            textAlign: 'center',
            paddingRight: '20px', // Ensure space for the dropdown arrow
            position: 'relative',
            border: '2px solid black',
            borderRadius: '30px',
            overflow: 'hidden',
          }}
        >
          {selectedChain}
          <span style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
            {isMenuOpen ? '▲' : '▼'} {/* Conditional rendering of up/down arrow based on menu open state */}
          </span>
        </Dropdown>
        <Dropdown.Menu style={{ left:'30px',maxHeight: '200px', overflowY: 'auto' }}>
          {monede.map((text, index) => (
            <Dropdown.Item key={index} eventKey={text}>
              {text}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Dropp;
