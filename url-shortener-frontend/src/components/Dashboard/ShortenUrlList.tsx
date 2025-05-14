import { ShortenItem } from "./ShortenItem";

interface ShortenUrlListProps {
  data: { id: string; originalUrl: string; shortUrl: string; clickCount: number; createdDate: string }[]
  refetch: () => void;
  clicksRefetch: () => void;
}

export const ShortenUrlList = ({ data, refetch, clicksRefetch }: ShortenUrlListProps) => {
  return (
    <div className="my-6 space-y-4">
      {data.map((item) => (
        <ShortenItem key={item.id} {...item} refetch={refetch} clicksRefetch={clicksRefetch}/>
      ))}
    </div>
  );
};

