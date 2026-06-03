import { SUPPORTED_CHAINS, SupportedChain } from './index';

/**
 * Example multi-chain client helper
 */
export class MultiChainClient {
  async getBalanceAcrossChains(address: string) {
    const results: Record<SupportedChain, string> = {} as any;
    for (const chain of SUPPORTED_CHAINS) {
      results[chain] = await this.getStablecoinBalance(chain, address);
    }
    return results;
  }

  private async getStablecoinBalance(chain: SupportedChain, address: string): Promise<string> {
    // Placeholder - implement real RPC calls per chain
    return `1000 USDC on ${chain}`;
  }
}