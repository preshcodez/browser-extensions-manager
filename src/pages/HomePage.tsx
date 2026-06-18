import React from "react";
import ExtensionList from "../components/ExtensionList";
import type { Extension } from "../App";
import ExtensionCard from "../components/ExtensionCard";

interface HomePageProps {
  allExtensions: Extension[];
  filter: string;
  setFilter: (value: string) => void;
  toggleExtension: (value: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({
  allExtensions,
  filter,
  setFilter,
  toggleExtension,
}) => {
  return (
    <div>
      <ExtensionList
        allExtensions={allExtensions}
        filter={filter}
        setFilter={setFilter}
      />
      <ExtensionCard
        allExtensions={allExtensions}
        toggleExtension={toggleExtension}
      />
    </div>
  );
};

export default HomePage;
