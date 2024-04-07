interface InfoItemProps {
  title: string;
  data: string | number | string[];
}

function InfoItem({ title, data }: InfoItemProps) {
  const currency =
    (title.toLowerCase() === 'budget' || title.toLowerCase() === 'revenue') &&
    typeof data === 'number' &&
    data > 0
      ? new Intl.NumberFormat('us', {
          style: 'currency',
          currency: 'USD',
        }).format(data)
      : 'ND';

  const convertedData =
    title.toLowerCase() === 'runtime'
      ? `${data}min`
      : title.toLowerCase() === 'budget' || title.toLowerCase() === 'revenue'
        ? currency
        : data;

  return (
    <div className="mb-4 flex flex-col gap-1">
      <h4 className="text-base font-bold">{title}</h4>
      <span className="text-xs dark:text-slate-400">
        {typeof data === 'number' || typeof data === 'string'
          ? convertedData
          : data.join(', ')}
      </span>
    </div>
  );
}

export default InfoItem;
