import { MMKV } from 'react-native-mmkv';

//mmkv
const DATABASE_MEALS = 'meals';

export const storageMeals = new MMKV({ id: `${DATABASE_MEALS}` });

export { DATABASE_MEALS };
