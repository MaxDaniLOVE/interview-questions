'use client';

import { CATEGORIES } from "@/src/constants";
import { useMemo, useState } from "react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string | null>('HTML');
  const [search, setSearch] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.toLowerCase();
    setSearch(value);
  };

  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(categoryName);
  };

  const questions = useMemo(() => {
    if (activeCategory) {
      const category = CATEGORIES.find((category) => category.name === activeCategory);
      if (category) {
        return category.questions.filter((question) => question.q.toLowerCase().includes(search.toLowerCase()));
      }
    }
    return [];
  }, [activeCategory, search]);

  return (
    <main>
      <div className="container mx-auto p-4">
        <h2 className="sr-only">Интерактивная шпаргалка по вопросам и ответам для собеседования</h2>
        <div className="search-bar">
          <input type="text" id="search" placeholder="Поиск по вопросам..." value={search} onChange={handleChange} />
        </div>
        <div className="flex gap-2" id="cats">
          {CATEGORIES.map((category) => (
            <button key={category.name} className={`cat-btn ${activeCategory === category.name ? 'active' : ''}`} data-cat={category.name} onClick={() => handleCategoryClick(category.name)}>{category.name}</button>
          ))}
        </div>
        {activeCategory && (
          <div className="flex flex-col gap-2" id="list">
            {questions.map((question) => (
              <div key={question.q} className="border border-gray-300 rounded-md p-2">
                <h3>{question.q}</h3>
                <div dangerouslySetInnerHTML={{ __html: question.a }} />
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
