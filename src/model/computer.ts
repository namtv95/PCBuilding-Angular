import { HardWare } from './hardware';

export class Computer {
  computer: Array<HardWare> = [];

  constructor() {
    if (!this.computer || this.computer.length === 0) {
      this.computer = [
        {
          type: 'mainboard',
          name: 'GIGABYTE Z390 AORUS PRO WIFI LGA1151v2',
          image: '/assets/images/mainboard.png',
          link: '',
          oldPrice: 4990000,
          currentPrice: 4990000,
          countPrice: true,
          displayOldPrice: '',
          displayCurrentPrice: ''
        },
        {
          type: 'cpu',
          name: 'Intel Core i7 8700 / 12M / 3.2GHz',
          image: '/assets/images/cpu.png',
          link: '',
          oldPrice: 7900000,
          currentPrice: 7900000,
          countPrice: true,
          displayOldPrice: '',
          displayCurrentPrice: ''
        },
        {
          type: 'ram',
          name: 'G.SKILL Trident Z RGB (16G DDR4 2x8G 3000 cas 16)',
          image: '/assets/images/ram.png',
          link: '',
          oldPrice: 2900000,
          currentPrice: 2900000,
          countPrice: true,
          displayOldPrice: '',
          displayCurrentPrice: ''
        },
        {
          type: 'vga',
          name: 'AORUS GeForce® RTX 2080 XTREME 8G',
          image: '/assets/images/vga.png',
          link: '',
          oldPrice: 24490000,
          currentPrice: 24490000,
          countPrice: true,
          displayOldPrice: '',
          displayCurrentPrice: ''
        },
        {
          type: 'ssd',
          name: 'Samsung SSD 860 Evo 250GB 2.5\' Sata 3 550 / 520 MB/s (MZ - 76E250BW)',
          image: '/assets/images/ssd.png',
          link: '',
          oldPrice: 1370000,
          currentPrice: 1370000,
          countPrice: true,
          displayOldPrice: '',
          displayCurrentPrice: ''
        },
        {
          type: 'hdd',
          name: 'WD HDD 1TB Black 7200rpm',
          image: '/assets/images/hdd.png',
          link: '',
          oldPrice: 1900000,
          currentPrice: 1900000,
          countPrice: false,
          displayOldPrice: '',
          displayCurrentPrice: ''
        },
        {
          type: 'case',
          name: 'Case CoolerMaster MASTERBOX MB511 RGB',
          image: '/assets/images/case.png',
          link: '',
          oldPrice: 1650000,
          currentPrice: 1650000,
          countPrice: true,
          displayOldPrice: '',
          displayCurrentPrice: ''
        },
        {
          type: 'psu',
          name: '( 750W Bronze ) Seasonic 750W M12II Bronze Evo Edition',
          image: '/assets/images/psu.png',
          link: '',
          oldPrice: 2350000,
          currentPrice: 2350000,
          countPrice: true,
          displayOldPrice: '',
          displayCurrentPrice: ''
        },
        {
          type: 'cooling',
          name: 'AIO MasterLiquid ML240L RGB',
          image: '/assets/images/cooling.png',
          link: '',
          oldPrice: 1740000,
          currentPrice: 1740000,
          countPrice: true,
          displayOldPrice: '',
          displayCurrentPrice: ''
        },
        {
          type: 'monitor',
          name: '( VA 24\" 144Hz ) Acer ED242QR Abidpx - 144Hz Curved',
          image: '/assets/images/monitor.png',
          link: '',
          oldPrice: 5190000,
          currentPrice: 5190000,
          countPrice: true,
          displayOldPrice: '',
          displayCurrentPrice: ''
        }
      ];
    }
  }
}
