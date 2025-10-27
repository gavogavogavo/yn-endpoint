const fs = require('fs').promises;
const path = require('path');

module.exports = async (req, res) => {
  console.log('Received request:', req.method, req.body);
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // CHANGE: Use process.cwd() instead of __dirname for Vercel
    const whitelistPath = path.join(process.cwd(), 'data', 'whitelist.json');
    const whitelistData = await fs.readFile(whitelistPath, 'utf8');
    const whitelistRaw = JSON.parse(whitelistData).addresses;
    
    // Normalize all whitelist addresses to lowercase
    const whitelist = whitelistRaw.map(addr => addr.toLowerCase());
    console.log('Normalized whitelist:', whitelist);

    const { addresses } = req.body;
    console.log('Request addresses:', addresses);
    
    const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
    
    // Merkl should always send addresses array, but handle edge cases
    if (!addresses || !Array.isArray(addresses)) {
      console.log('No addresses provided or invalid format');
      return res.status(200).json([
        {
          address: ZERO_ADDRESS,
          boost: '0'
        }
      ]);
    }

    // Process the addresses Merkl is asking about
    const response = addresses.map(address => ({
      address: address,
      boost: whitelist.includes(address.toLowerCase()) ? '1000000000' : '0'
    }));

    // Ensure ZERO_ADDRESS is always included
    const hasZeroAddress = response.some(
      item => item.address.toLowerCase() === ZERO_ADDRESS.toLowerCase()
    );
    
    if (!hasZeroAddress) {
      response.push({
        address: ZERO_ADDRESS,
        boost: '0'
      });
    }

    console.log('Final response:', response);
    res.status(200).json(response);
    
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};