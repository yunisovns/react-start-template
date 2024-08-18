import React from 'react';
import { useForm } from "react-hook-form";
import { Operation } from "../../widgets/OperationList/index";

const AddOperationForm: React.FC = () => {
    const { register, handleSubmit } = useForm();
  
    const onSubmit = (data: Operation) => {
      console.log(data);
      // Здесь можно добавить логику для отправки данных на сервер для сохранения операции
    };
  
    return (
      <div>
        <h2>Добавить операцию</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Тип операции:
            <select {...register('type', { required: true })}>
              <option value="Cost">Расход</option>
              <option value="Profit">Доход</option>
            </select>
          </label>
          <br />
          <label>
            Название:
            <input type="text" {...register('value.name', { required: true })} />
          </label>
          <br />
          <label>
            Сумма:
            <input type="number" {...register('value.amount', { required: true })} />
          </label>
          <br />
          <label>
            Дата создания:
            <input type="text" {...register('value.createdAt', { required: true })} />
          </label>
          <br />
          <label>
            Описание:
            <input type="text" {...register('value.desc')} />
          </label>
          <br />
          <button type="submit">Добавить операцию</button>
        </form>
      </div>
    );
  };
  
  export default AddOperationForm;