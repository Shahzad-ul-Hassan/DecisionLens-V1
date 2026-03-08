import { liquidityMock, type LiquiditySnapshot } from "@/mocks/liquidity";

export async function fetchLiquiditySnapshot(): Promise<LiquiditySnapshot> {
  return liquidityMock;
}

