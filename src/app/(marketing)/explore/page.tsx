
import assetsData from "@/data/assets.json";
import FilteredGrid from "@/components/explore/FilteredGrid";
import { ToolAsset } from "@/types";


export default function ExplorePage() {
  
  const data = assetsData as unknown as ToolAsset[];

  return (
    <main className="min-h-screen bg-[#020617] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto mb-20">
        
        <FilteredGrid initialData={data} />
      </div>
    </main>
  );
}