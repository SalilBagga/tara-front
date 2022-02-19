import React, { useEffect, useState } from 'react';

import Form from '../Components/Form';
import Table from '../Components/Table';
export default function Home() {
  const [story, setStory] = useState(null);
  const [storylist, setStorylist] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('story-list'));
    if (savedList) {
      setStorylist(savedList);
    }
  }, []);
  useEffect(() => {
    if (story !== null) {
      setStorylist((prev) => [...prev, story]);
      setStory(null);
    }
  }, [story]);

  useEffect(() => {
    if (storylist) {
      localStorage.setItem('story-list', JSON.stringify(storylist));
    }
  }, [storylist]);
  return (
    <div>
      <Form story={story} setStory={setStory} />
      <Table storylist={storylist} />
    </div>
  );
}
