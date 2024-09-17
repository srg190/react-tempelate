import { useAppDispatch, useAppSelector } from "@src/redux/store/hooks";
import React, { useEffect } from "react";

import { setUser } from "@src/redux/slices/userSlice";

const Home = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(
      setUser({ email: "a@b.c", password: "aedgf242", name: "test", age: 9 })
    );
  }, []);
  return <div>{JSON.stringify(user)}</div>;
};

export default Home;
