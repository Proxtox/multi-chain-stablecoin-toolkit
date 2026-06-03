// Multi-chain stablecoin toolkit example
// Reusable functions for Base, Arc, Solana, Ethereum, Sui, BSC

export const SUPPORTED_CHAINS = ['base', 'arc', 'solana', 'ethereum', 'sui', 'bsc'] as const;

export type SupportedChain = typeof SUPPORTED_CHAINS[number];

/**
 * Get stablecoin balance across chains (mock example)
 */
export async function getStablecoinBalance(chain: SupportedChain, address: string): Promise<string> {
  console.log(`Fetching balance on ${chain} for ${address}`);
  // In real implementation: call RPC / indexer per chain
  return '1000.00 USDC';
}

/**
 * Example cross-chain transfer using CCTP (placeholder)
 */
export async function transferViaCCTP(fromChain: SupportedChain, toChain: SupportedChain, amount: string) {
  console.log(`Transferring ${amount} from ${fromChain} to ${toChain} via CCTP`);
  return { txHash: '0xexample...' };
}