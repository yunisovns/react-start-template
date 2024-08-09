// Функция для генерации случайной операции (дохода или расхода)

type Category = {
  id: string;
  name: string;
  photo?: string;
};

type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};

type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
};

type OperationValue = Cost | Profit;

export type Operation = {
  type: 'Cost' | 'Profit';
  value: OperationValue;
};

export const createRandomOperation = (createdAt: string): Operation => {
  const operationType: 'Cost' | 'Profit' = Math.random() < 0.5 ? 'Cost' : 'Profit';
  const randomOperation: OperationValue = {
    id: Math.random().toString(),
    name: `Operation ${Math.random().toString()}`,
    desc: `Description ${Math.random().toString()}`,
    createdAt: createdAt,
    amount: Math.random(),
    category: {
      id: Math.random().toString(),
      name: `Category ${Math.random().toString()}`,
      photo: `https:${Math.random().toString()}`,
    },
    type: operationType,
  };
  return { type: operationType, value: randomOperation };
};
