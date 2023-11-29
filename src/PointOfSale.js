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
        <h1>STOCK REGISTRATION</h1>
        <div>
          <label> First Name:</label>
        </div>
        <div>
          <input type="text" className="inp" {...register("firstName")} />
        </div>
        <div>{errors.firstName && <span>{errors.firstName.message}</span>}</div>
        <div>
          <label> Last Name:</label>
        </div>
        <div>
          <input type="text" className="inp" {...register("lastName")} />
          {errors.lastName && <span>{errors.lastName.message}</span>}
        </div>
        <div>
          <label> Email:</label>
        </div>
        <div>
          <input type="text" className="inp" {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label> Age:</label>
        </div>
        <div>
          <input
            type="number"
            className="inp"
            {...register("age", { valueAsNumber: true })}
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>

        <div>
          <label> Password:</label>
        </div>
        <div>
          <input type="text" className="inp" {...register("password")} />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <label> Confirm Password:</label>
        <input type="text" {...register("comfirmPassword")} />
        {errors.comfirmPassword && (
          <span>{errors.comfirmPassword.message}</span>
        )}
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default App;
