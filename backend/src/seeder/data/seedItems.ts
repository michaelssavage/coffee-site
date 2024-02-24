import { Coffee } from 'src/coffee/entity/coffee.entity';
import { CoffeeType } from 'src/coffee/enums/CoffeeType';

export const seedItems: Partial<Coffee>[] = [
  {
    name: 'Dark Roast',
    price: 4,
    type: 'Arabic' as CoffeeType,
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fdc%2Fd6%2Faa%2Fdcd6aa7a5afe437780610133faeda56b.png&f=1&nofb=1&ipt=5586fa5b47c60d4e968f9e4e181a3c998d2f70bf8b3774f1507fc068bf64ea13&ipo=images',
    description: 'Free in the MVST office',
  },
  {
    name: 'Americano',
    price: 3,
    type: 'Robusta' as CoffeeType,
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblackhillsblend.com%2Fwp-content%2Fuploads%2F2019%2F03%2FAmericano-Coffee-Espresso-Rapid-City.png&f=1&nofb=1&ipt=2424ea6cade37eca7d83bfcea121dc9293e97b5ccc507a8986246f03856eba50&ipo=images',
    description: 'Free in the MVST office',
  },
  {
    name: 'Flat White',
    price: 5,
    type: 'Arabic' as CoffeeType,
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages_k%2Fcoffee-transparent%2Fcoffee-transparent-24.png&f=1&nofb=1&ipt=1f46b7777a59d6707e42bed16f64d9827e5b5ced0ce76fffbe9b7eb3ace234c5&ipo=images',
    description: 'Free in the MVST office',
  },
  {
    name: 'Latte',
    price: 5,
    type: 'Robusta' as CoffeeType,
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngarts.com%2Ffiles%2F6%2FCappuccino-Latte-Transparent-Image.png&f=1&nofb=1&ipt=817e467c97936035c1d413bc85bb85862e3434453309bcbf58b7b38a1e1b84dc&ipo=images',
    description: 'Free in the MVST office',
  },
  {
    name: 'Cappuccino',
    price: 6,
    type: 'Arabic' as CoffeeType,
    imageUrl:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngarts.com%2Ffiles%2F1%2FCappuccino-PNG-Picture.png&f=1&nofb=1&ipt=51ed4401beb69388b41ce6fdfb3553410b5ecc5568b68b8d4a626caf19cda2c1&ipo=images',
    description: 'Free in the MVST office',
  },
];
