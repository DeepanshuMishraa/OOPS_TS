
export class EnergyMeter {
  private totalConsumption: number = 0;

  addConsumption(amount: number): void {
    this.totalConsumption += amount;
  }

  getTotalConsumption(): number {
    return this.totalConsumption;
  }
}
