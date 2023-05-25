"use client"

import axios from 'axios';
import Link from "next/link";
import { useEffect, useState } from 'react';
import NavBar from '../../components/navBar';
import Footer from '../../components/footer';
import Card from '../../components/Card';

export default function Page() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/marvel');
        setCharacters(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error al obtener los personajes de Marvel:', error);
      }
    };

    fetchData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(characters.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCharacters = characters.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return(
    <>
      <container id="container">
      <NavBar />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {currentCharacters.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <Link
              key={index + 1}
              href={`/dashboard?page=${index + 1}`}
              className={`mx-2 rounded p-2 ${
                currentPage === index + 1 ? "bg-gray-300" : "bg-gray-100"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Link>
          ))}
        </div>
        <Footer />
      </container>
    </>
  ) 
}