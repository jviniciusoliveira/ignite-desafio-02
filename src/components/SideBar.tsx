import { Button } from "./Button";

import { TGenre } from './types';

type SideBarProps = {
  genres: TGenre[];
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

export function SideBar({ genres, selectedGenreId, handleClickButton }: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map((genre: TGenre) => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}