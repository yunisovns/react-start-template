import React from 'react';

interface ShortOperationProps {
  transactionAmount: number;
  Category: string;
  title: string;
  ShortDiscription: string;
}

export const ShortOperation = ({ transactionAmount, Category, title, ShortDiscription }: ShortOperationProps) => {
  return (
    <div className=" flex w-1/4 justify-between rounded-lg bg-slate-300 p-4">
      <div className="w-3/4">
        <div>
          <b>Название:</b> {title}
        </div>
        <div>
          <b>Категория:</b> {Category}
        </div>
        <div>
          <b>Описание:</b> <div className=" h-6 w-2/3 truncate">{ShortDiscription}</div>
        </div>
      </div>
      <div className="grid item-end text-left">
        <div className=" font-bold text-red-600">-{transactionAmount} ₽.</div>
      </div>
    </div>
  );
};
