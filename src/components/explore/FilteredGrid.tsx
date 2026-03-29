"use client";
import { useState, useEffect } from "react";
import { CoreCard } from "@/components/cards/CoreCard";
import { SkeletonCard } from "@/components/cards/SkeletonCard";
import ExploreHeader from "./ExploreHeader";
import { ToolAsset } from "@/types";


export default function FilteredGrid({ initialData }: { initialData: ToolAsset[] }) {
  const [items, setItems] = useState<ToolAsset[]>([]);
  const [filteredItems, setFilteredItems] = useState<ToolAsset[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setItems(initialData);
      setFilteredItems(initialData);
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [initialData]);

  const handleSearch = (query: string) => {
    const res = items.filter(i => i.title.toLowerCase().includes(query.toLowerCase()));
    setFilteredItems(res);
  };

  return (
    <>
      <ExploreHeader onSearch={handleSearch} /> 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
          : filteredItems.map((item) => <CoreCard key={item.id} item={item} />)}
      </div>
    </>
  );
}