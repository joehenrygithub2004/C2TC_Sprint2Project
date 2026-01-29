export interface Unit {
  unitId?: number;
  unitName: string;
  unitType: 'SHOP' | 'FOODCOURT' | 'CINEMA';
  floorNumber: number;
  status: 'ACTIVE' | 'INACTIVE';
  rentAmount: number;
}
