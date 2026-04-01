"use client";
import { useState, useEffect, useMemo } from "react";
import { CoreCard } from "@/components/cards/CoreCard";
import { SkeletonCard } from "@/components/cards/SkeletonCard";
import ExploreHeader from "./ExploreHeader";
import { ToolAsset } from "@/types";

export default function FilteredGrid({
  initialData,
}: {
  initialData: ToolAsset[];
}) {
  const [items, setItems] = useState<ToolAsset[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortOption, setSortOption] = useState("newest");

  useEffect(() => {
    const timer = setTimeout(() => {
      setItems(initialData);
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [initialData]);

  const filteredItems = useMemo(() => {
    const filtered = items.filter((item) => {
      const matchesSearch = item.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        categoryFilter === "all" ||
        item.category.toLowerCase() === categoryFilter.toLowerCase();
      return matchesSearch && matchesCategory;
    });

    // Sort
    filtered.sort((a, b) => {
      switch (sortOption) {
        case "price-low":
          return parseFloat(a.price) - parseFloat(b.price);
        case "price-high":
          return parseFloat(b.price) - parseFloat(a.price);
        case "rating":
          return b.rating - a.rating;
        case "newest":
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    return filtered;
  }, [items, searchQuery, categoryFilter, sortOption]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilter = (category: string) => {
    setCategoryFilter(category);
  };

  const handleSort = (sortType: string) => {
    setSortOption(sortType);
  };

  return (
    <>
      <ExploreHeader
        onSearch={handleSearch}
        onFilter={handleFilter}
        onSort={handleSort}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
          : filteredItems.map((item) => <CoreCard key={item.id} item={item} />)}
      </div>
    </>
  );
}
