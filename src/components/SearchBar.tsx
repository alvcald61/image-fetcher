import React, { useEffect, useState } from "react";

type Props = {
  onSearch: (tag: string) => void;
  tag?: string;
  title: string;
  placeholder?: string;
};

const SearchBar = ({ onSearch, tag, title, placeholder }: Props) => {
  const [text, setText] = useState("");
  useEffect(() => {
    setText(decodeURIComponent(tag || ""));
  }, [tag]);

  const updateText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(text);
  };

  return (
    <section>
      <form className="search-bar" onSubmit={onFormSubmit}>
        <h2 className="section-title">{title}</h2>
        <div className="align-items">
          <input
            type="text"
            placeholder={placeholder || "flags"}
            className="search-input"
            value={text}
            onChange={updateText}
          />
          <button
            className="search-button"
            type="submit"
            onClick={() => onSearch(text)}
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchBar;
