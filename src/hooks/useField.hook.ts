import React, { useState } from "react";

export const useField = (initialState: "", limit?: 9999) => {
  const [value, setValue] = useState<string>(initialState);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value.slice(0, limit));
    console.log(e.currentTarget.value);
  };
  return {
    onChange,
    value,
  };
};
