import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import "./stylesheeet.css";

const schema = z
  .object({
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(30),
    email: z.string().email(),
    password: z.string().min(5).max(20),
    comfirmPassword: z.string().min(5).max(20),
  })
  .refine((data) => data.password === data.comfirmPassword, {
    message: "password do not match",
    path: ["comfirmPassword"],
  });

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const submitData = (data) => {
    console.log("It Worked", data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(submitData)}>
        <label> First Name:</label>
        <input type="text" {...register("firstName")} />
        {errors.firstName && <span>{errors.firstName.message}</span>}
        <label> Last Name:</label>
        <input type="text" {...register("lastName")} />
        {errors.lastName && <span>{errors.lastName.message}</span>}
        <label> Email:</label>
        <input type="text" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
        <label> Age:</label>
        <input type="number" {...register("age", { valueAsNumber: true })} />
        {errors.age && <span>{errors.age.message}</span>}
        <label> Password:</label>
        <input type="text" {...register("password")} />
        {errors.password && <span>{errors.password.message}</span>}
        <label> Confirm Password:</label>
        <input type="text" {...register("comfirmPassword")} />
        {errors.comfirmPassword && (
          <span>{errors.comfirmPassword.message}</span>
        )}

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
