"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  useAddTodosMutation,
  useDeleteTodosImgMutation,
  useDeleteTodosMutation,
  useGetTodosQuery,
} from "../api/todo";
import { IData, IImage } from "../types/types";
import { Button, Modal, Box, TextField } from "@mui/material";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
  borderRadius: 2,
};

const Crud = () => {
  const { data, isLoading, isFetching, refetch } = useGetTodosQuery(null);
  const [deleteTodo] = useDeleteTodosMutation();
  const [deleteTodoImg] = useDeleteTodosImgMutation();
  const [addTodo] = useAddTodosMutation();

  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("Name", data.Name);
    formData.append("Description", data.Description);
    formData.append("Images", data.Images[0]);
    await addTodo(formData);
    refetch();
    reset();
    setOpen(false);
  };

  if (isLoading || isFetching) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-6">
      <Button variant="contained" onClick={() => setOpen(true)}>
        Add Todo
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={style}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <input
              className="text-black"
              type="file"
              {...register("Images", { required: true })}
            />
            <TextField label="Name" {...register("Name", { required: true })} />

            <TextField
              label="Description"
              {...register("Description", { required: true })}
            />

            <Button fullWidth type="submit" variant="contained">
              Save
            </Button>
          </form>
        </Box>
      </Modal>

      <div className="max-w-xl mx-auto space-y-4 mt-6">
        {data?.data?.map((todo: IData) => (
          <div
            key={todo.id}
            className="flex justify-between p-4 border rounded-xl"
          >
            {todo?.images?.map((img: IImage) => (
              <div key={img.id}>
                <img
                  className="w-[80px] h-[80px] rounded-full"
                  src={`http://37.27.29.18:8001/images/${img.imageName}`}
                />
                <Button
                  color="error"
                  variant="contained"
                  onClick={async () => {
                    await deleteTodoImg(img.id);
                    refetch();
                  }}
                >
                  Delete Img
                </Button>
              </div>
            ))}

            <h2>{todo.name}</h2>

            <Button
              variant="contained"
              color="error"
              onClick={async () => {
                await deleteTodo(todo.id);
                refetch();
              }}
            >
              Delete
            </Button>

            <input type="checkbox" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crud;
