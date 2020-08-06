import React, { useState } from "react";

import { Container, ButtonOpen, TextField } from "./styles";
import { MdSearch, MdClose } from "react-icons/md";

interface SearchProps {
  onSearch?: (value: string) => void;
  onCancel?: () => void;
}

const Search: React.FC<SearchProps> = ({ onCancel, onSearch }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  function handleClose() {
    if (open && typeof onCancel === "function") {
      onCancel();
      setText("");
    }
    setOpen(!open);
  }

  function handleChangeTextField(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setText(value);
    if (value.trim() !== "" && typeof onSearch === "function") {
      onSearch(value);
    } else if (typeof onCancel === "function") {
      onCancel();
    }
  }

  return (
    <Container>
      <TextField
        type="text"
        opened={open}
        onChange={handleChangeTextField}
        value={text}
      />
      <ButtonOpen onClick={handleClose}>
        {open ? (
          <MdClose color="#fff" size={22} />
        ) : (
          <MdSearch color="#fff" size={22} />
        )}
      </ButtonOpen>
    </Container>
  );
};

export default Search;
