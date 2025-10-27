to add a new wallet address to the whitelist, add it in the whitelist.json file

to test API endpoint, use the command below and add the list of wallet addresses in the whitelist.json file. 

curl -X POST https://yn-endpoint.vercel.app/api/boost \     
  -H "Content-Type: application/json" \
  -d '{
    "addresses": [
      "0x1f0d16f1c44fa04511ad58360782b1a67e1f5dc0", 
      "0x328c9417a862df04255c9744af4d59e326063dde",
      "0x3dab62f33e7032bd33c532808092d033887eb456",
      "0x1597e4b7cf6d2877a1d690b6088668afdb045763",
      "0x5c47F9556FB60C2a7A28533EcCE4Bc7fB0C1ad40",
      "0xE084Ba16CbD3EC5b0a2639D6634D084A92eB0F84",
      "0xF5B905Bd11A7a42b5f2Fdf334Ac8377390BC7268",
      "0x4200Db6f030508941e60Ae23D9d0D2D92363fd8A",
      "0x6f199F00655e0D3e9c1f2B654570758CA1e33759",
      "0xe4139f5ea6e995f4518232acb1293bd879a1d177",
      "0x72ea177fc9ed87bdc17066256dffbbb0d65d6565"
    ]
  }'

expected output: [{"address":"0x1f0d16f1c44fa04511ad58360782b1a67e1f5dc0","boost":"1000000000"},{"address":"0x328c9417a862df04255c9744af4d59e326063dde","boost":"1000000000"},{"address":"0x3dab62f33e7032bd33c532808092d033887eb456","boost":"1000000000"},{"address":"0x1597e4b7cf6d2877a1d690b6088668afdb045763","boost":"1000000000"},{"address":"0x5c47F9556FB60C2a7A28533EcCE4Bc7fB0C1ad40","boost":"1000000000"},{"address":"0xE084Ba16CbD3EC5b0a2639D6634D084A92eB0F84","boost":"1000000000"},{"address":"0xF5B905Bd11A7a42b5f2Fdf334Ac8377390BC7268","boost":"1000000000"},{"address":"0x4200Db6f030508941e60Ae23D9d0D2D92363fd8A","boost":"1000000000"},{"address":"0x6f199F00655e0D3e9c1f2B654570758CA1e33759","boost":"1000000000"},{"address":"0xe4139f5ea6e995f4518232acb1293bd879a1d177","boost":"1000000000"},{"address":"0x72ea177fc9ed87bdc17066256dffbbb0d65d6565","boost":"1000000000"},{"address":"0x0000000000000000000000000000000000000000","boost":"0"}]%   %    