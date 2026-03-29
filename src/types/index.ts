export interface ToolAsset {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  price: string;
  category: string;
  rating: number;
  image: string;
  aiModel: string;
  workflow: string[];
  outputFormat: string;
  features: string[];
  location: string;
  date: string;
  stats: Record<string, string>;
  targetAudience: string;
}
