import styled from "styled-components";
import { useMemoStore } from "./../store/MemoList";
import { useState } from "react";

const LinkInput = styled.input`
  width: 100%;
  height: 20%;
  text-align: center;
`;

const MemoInput = () => {
  const { addMemo } = useMemoStore();
  const [value, setValue] = useState("");
  const [linkValue, setLinkValue] = useState("");
  return (
    <AddMemoForm
      onSubmit={(e) => {
        e.preventDefault();
        addMemo(value, linkValue);
        setLinkValue("");
        setValue("");
      }}
    >
      <div>
        <div>노션 이름</div>
        <LinkInput
          type="text"
          onChange={(e) =>
            setValue((prev) => {
              if (prev !== e.target.value) {
                return e.target.value;
              }
            })
          }
          value={value}
        />
        <div>노션 링크</div>
        <LinkInput
          type="text"
          onChange={(e) =>
            setLinkValue((prev) => {
              if (prev !== e.target.value) {
                return e.target.value;
              }
            })
          }
          value={linkValue}
        />
        <button type="submit">저장</button>
      </div>
    </AddMemoForm>
  );
};

export default MemoInput;

const AddMemoForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 16px;
  > div {
    position: relative;
    width: 400px;
    height: 200px;
  }

  button {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;
