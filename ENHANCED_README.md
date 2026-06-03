# multi-chain-stablecoin-toolkit

Reusable monorepo toolkit for building stablecoin-powered apps across Base, Arc, Solana, Ethereum, Sui, and BSC.

## Overview
Starter monorepo with shared TypeScript utilities, examples, and patterns for stablecoin applications on multiple chains.

## Tech Stack
- TypeScript
- viem / @solana/web3.js / @mysten/sui.js
- CCTP for cross-chain

## Getting Started
```bash
git clone https://github.com/Proxtox/multi-chain-stablecoin-toolkit.git
cd multi-chain-stablecoin-toolkit
npm install
```

## Key Files
- `src/index.ts` - Core multi-chain helper functions

## Next Steps
- Add real RPC calls per chain
- Implement CCTP transfer helper
- Add React hooks
- Create example dApp using the toolkit

## License
MIT