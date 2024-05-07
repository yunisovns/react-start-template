import React from 'react';

interface LongOperationProps {
  transactionAmount: number;
  Category: string;
  title: string;
  Discription?: string;
  Date: string;
}

export const LongOperation = ({ transactionAmount, Category, title, Discription, Date }: LongOperationProps) => {
  return (
    <div className=" flex w-full justify-between rounded-lg bg-slate-300 p-2 box-border">
      <div className="w-3/4">
        <div className=" pb-3 font-bold">{Date}</div>
        <div>
          <b>Название:</b> {title}
        </div>
        <div>
          <b>Категория:</b> {Category}
        </div>
        <div>
          <b>Описание:</b> <div className=" h-6 w-2/3 truncate">{Discription}</div>
        </div>
      </div>
      <div className="grid p-4">
        <div className=" font-bold text-red-600">-{transactionAmount} ₽.</div>
        <button className=" cursor-pointer">Ред.</button>
      </div>
    </div>
  );
};
