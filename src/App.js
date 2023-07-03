import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

const App = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <div className="form-group">
        <label className="form-label">Фамилия:</label>
        <input
          type="text"
          {...register("lastName", { required: true })}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Имя:</label>
        <input
          type="text"
          {...register("firstName", { required: true })}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Отчество:</label>
        <input
          type="text"
          {...register("middleName", { required: true })}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Год рождения:</label>
        <input
          type="number"
          {...register("birthYear", { required: true })}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Номер телефона:</label>
        <input
          type="tel"
          {...register("phoneNumber", { required: true })}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Email:</label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="form-input"
        />
      </div>
      <button type="submit" className="form-button">
        Зарегистрироваться
      </button>
    </form>
  );
};
export default App;
