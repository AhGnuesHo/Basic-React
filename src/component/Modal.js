import { useRef, useState } from "react";

export default function Modal({ isShowModal, setIsShowModal, submitItem  }) {

  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [src, setSrc] = useState("");

  const onSubmit = (e)  => {
    e.preventDefault();
    submitItem({name, src, content});
    setIsShowModal(false);
  }

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
          onClick={() =>  setIsShowModal(false)}
        >
          ❌
        </span>
        <label className="label">이름</label>
        <input
          className="setPlant"
          id="name"
          placeholder="몬스테라"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label className="label">이미지</label>
        <input
          className="setPlant"
          id="img"
          placeholder="URL"
          value={src}
          required
          onChange={(e) => setSrc(e.target.value)}
        ></input>
        <label className="label">내용</label>
        <input
          className="setPlant"
          id="content"
          placeholder="물을 주면 좋아해요"
          required
          value = {content}
          onChange={(e => setContent(e.target.value))}
        ></input>
        <button type="submit" id="submutButton">
          save
        </button>
      </form>
    </div>
  );
}
