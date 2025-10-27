to add a new wallet address to the whitelist, add it in the whitelist.json file

to test API endpoint, use the command below and add the list of wallet addresses in the whitelist.json file. 

curl -X POST https://yn-endpoint.vercel.app/api/boost \
  -H "Content-Type: application/json" \
  -d '{
    "addresses": [
      "0x7E2dea37046dd2ED0b5EEB998BaECd7e90994c23"
    ]
  }'

expected output: [{"address":"0x7E2dea37046dd2ED0b5EEB998BaECd7e90994c23","boost":"1000000000"},{"address":"0x0000000000000000000000000000000000000000","boost":"0"}]%    