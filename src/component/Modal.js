import { useRef, useState } from "react";

export default function Modal({ isShowModal, setIsShowModal }) {
  function onSubmit(e) {

    fetch(`http://localhost:3001/plants/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.current.value,
        src: src.current.value,
        content: content.current.value,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("추가되었습니다.");
        setIsShowModal(false);
      }
    });
  }

  const name = useRef(null);
  const src = useRef(null);
  const content = useRef(null);

  return (
    <div
      className="modal"
      style={{
        display: isShowModal ? "block" : "none",
      }}
    >
      <form
        className="newPlantInfo"
        onSubmit={onSubmit}
        
      >
        <span
          id="closeModal"
          onClick={() => {
            setIsShowModal(false);
          }}
        >
          ❌
        </span>
        <label className="label">이름</label>
        <input
          className="setPlant"
          id="name"
          placeholder="몬스테라"
          ref={name}
        ></input>
        <label className="label">이미지</label>
        <input
          className="setPlant"
          id="img"
          placeholder="URL"
          ref={src}
        ></input>
        <label className="label">내용</label>
        <input
          className="setPlant"
          id="content"
          placeholder="물을 주면 좋아해요"
          ref={content}
        ></input>
        <button type="submit" id="submutButton">
          save
        </button>
      </form>
    </div>
  );
}
