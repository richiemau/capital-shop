import React from "react";
import { useForm } from "react-hook-form";
export default function Input() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log();
  return (
    <div>
      <div className="put">
        <div className="df">
          <p className="cls">Subscribe Newsletter</p>
          <p className="cls">Subscribe newsletter to get 5% on all products.</p>
        </div>
        <div className="ty" style={{ display: "flex" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="enter your email"
              {...register("email", { required: true })}
            />
            <button className="btn" onClick={handleSubmit(onSubmit)}>
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
