import { ShortenItem } from "./ShortenItem";

interface ShortenUrlListProps {
  data: { id: string; originalUrl: string; shortUrl: string; clickCount: number; createdDate: string }[];
}

export const ShortenUrlList = ({ data }: ShortenUrlListProps) => {
  return (
    <div className="my-6 space-y-4">
      {data.map((item) => (
        <ShortenItem key={item.id} {...item} />
      ))}
    </div>
  );
};

