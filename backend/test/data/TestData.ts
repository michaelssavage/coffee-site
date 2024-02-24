import { CreateCoffeeDto, UpdateCoffeeDto } from 'src/coffee/dto';
import { Coffee } from 'src/coffee/entity';
import { CoffeeType } from 'src/coffee/enums';

export const testNewCoffee: Coffee = {
  id: 1,
  name: 'e2e-test',
  price: 4,
  type: 'Arabic' as CoffeeType,
  imageUrl:
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fdc%2Fd6%2Faa%2Fdcd6aa7a5afe437780610133faeda56b.png&f=1&nofb=1&ipt=5586fa5b47c60d4e968f9e4e181a3c998d2f70bf8b3774f1507fc068bf64ea13&ipo=images',
  description: 'Free in the MVST office',
};

export const testCoffee: Coffee = {
  id: 2,
  name: 'Dark Roast',
  price: 4,
  type: 'Arabic' as CoffeeType,
  imageUrl:
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fdc%2Fd6%2Faa%2Fdcd6aa7a5afe437780610133faeda56b.png&f=1&nofb=1&ipt=5586fa5b47c60d4e968f9e4e181a3c998d2f70bf8b3774f1507fc068bf64ea13&ipo=images',
  description: 'Free in the MVST office',
};

export const testCreateCoffee: CreateCoffeeDto = {
  name: 'Americano',
  price: 4,
  type: 'Arabic' as CoffeeType,
  imageUrl:
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fdc%2Fd6%2Faa%2Fdcd6aa7a5afe437780610133faeda56b.png&f=1&nofb=1&ipt=5586fa5b47c60d4e968f9e4e181a3c998d2f70bf8b3774f1507fc068bf64ea13&ipo=images',
  description: 'Free in the MVST office',
};

export const testUpdateCoffee: UpdateCoffeeDto = testCoffee;
