'use client';

import { CATEGORIES, Question } from "@/src/constants";
import { useMemo, useState } from "react";

const QABlock = ({ question }: { question: Question }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-md p-2">
      <h3 onClick={handleClick} className="cursor-pointer font-bold text-lg">{question.q}</h3>
      {isOpen && <div dangerouslySetInnerHTML={{ __html: question.a }} />}
    </div>
  );
};

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
        <h1 className="mb-4 text-2xl font-bold">Интерактивная шпаргалка по вопросам и ответам для собеседования</h1>
        <div className="search-bar">
          <input type="text" id="search" placeholder="Поиск по вопросам..." className="w-full p-2 rounded-md border border-gray-300 mb-4" value={search} onChange={handleChange} />
        </div>
        <div className="flex gap-2 flex-wrap" id="cats">
          {CATEGORIES.map((category) => (
            <button key={category.name} type="button" className={`px-4 py-2 rounded-md border border-gray-300 mb-4 ${activeCategory === category.name ? 'bg-gray-100' : ''}`} onClick={() => handleCategoryClick(category.name)}>{category.name}</button>
          ))}
        </div>
        {activeCategory && (
          <div className="flex flex-col gap-2" id="list">
            {questions.map((question) => (
              <QABlock key={question.q} question={question} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
