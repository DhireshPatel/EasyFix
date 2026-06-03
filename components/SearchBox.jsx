"use client";

import React, { useState } from "react";
import { CATEGORIES } from "@/data/services";
import { IoSearchSharp } from "react-icons/io5";

const SearchBox = () => {

  // ALL SERVICES FROM CATEGORIES
  const ALL_SERVICES = CATEGORIES.flatMap((category) =>
    category.services.map((service) => ({
      ...service,
      categoryName: category.name,
      categoryId: category.id,
    }))
  );

  const [search, setSearch] = useState("");
  const [showClearBtn, setShowClearBtn] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = (query) => {
    const q = query.trim().toLowerCase();

    setShowClearBtn(q.length > 0);

    // EMPTY SEARCH
    if (!q) {
      setSearchResults([]);
      setShowResults(false);
      setNoResults(false);
      return;
    }

    // FILTER SERVICES
    const matches = ALL_SERVICES.filter(
      (s) =>
        s.name?.toLowerCase().includes(q) ||
        s.desc?.toLowerCase().includes(q) ||
        s.categoryName?.toLowerCase().includes(q)
    );

    // NO RESULTS
    if (matches.length === 0) {
      setNoResults(true);
      setSearchResults([]);
      setShowResults(true);
      return;
    }

    // RESULTS FOUND
    setNoResults(false);
    setSearchResults(matches);
    setShowResults(true);
  };

  const clearSearch = () => {
    setSearch("");
    setSearchResults([]);
    setShowResults(false);
    setShowClearBtn(false);
    setNoResults(false);
  };

  const escapeRegex = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  const goToService = (id, categoryId) => {
    clearSearch();

    // Pehle category section tak scroll karo
    // const section = document.getElementById(`category-${categoryId}`);
    // if (section) {
    //   section.scrollIntoView({ behavior: "smooth", block: "start" });
    // }

    // Phir specific card highlight karo
    setTimeout(() => {
      const card = document.getElementById(`card-${id}`);
      if (!card) return;

      card.scrollIntoView({ behavior: "smooth", block: "center" });

      setTimeout(() => {
        card.classList.add("highlight");
        setTimeout(() => card.classList.remove("highlight"), 2000);
      }, 400);
    });
  };

  return (
    <>
      {/* SEARCH BOX */}
      <div className="search-wrapper">
        <span className="search-icon"><IoSearchSharp className="size-5"/></span>

        <input
          type="text"
          className="search-input"
          placeholder="Search services..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            handleSearch(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              clearSearch();
            }
          }}
        />

        <button
          className={`search-clear ${showClearBtn ? "visible" : ""}`}
          onClick={clearSearch}
        >
          ✕
        </button>
      </div>

      {/* SEARCH RESULTS */}
      <div className={`search-results ${showResults ? "show" : ""}`}>
        {noResults ? (
          <div className="search-no-result">
            😕 No services found for "{search}"
          </div>
        ) : (
          searchResults.map((s) => {

            const regex = new RegExp(
              `(${escapeRegex(search)})`,
              "gi"
            );

            const highlighted = s.name.replace(
              regex,
              "<mark>$1</mark>"
            );

            return (
              <div
                key={s.id}
                className="search-result-item"
                onClick={() => goToService(s.id, s.categoryId)}
              >
                <span className="sri-icon">{s.icon}</span>

                <div className="sri-info">

                  <div
                    className="sri-name"
                    dangerouslySetInnerHTML={{
                      __html: highlighted,
                    }}
                  />

                  <div className="sri-cat">
                    {s.categoryName} · {s.duration}
                  </div>

                </div>

                <span className="sri-price">
                  ₹{s.price?.toLocaleString()}
                </span>

              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default SearchBox;