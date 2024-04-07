interface InfoItemProps {
  title: string;
  data: string | number | string[];
}

function InfoItem({ title, data }: InfoItemProps) {
  const newData =
    data === 0 ||
    data === '' ||
    (typeof data !== 'number' && typeof data !== 'number' && data.length === 0)
      ? 'ND'
      : data;

  const currency =
    (title.toLowerCase() === 'budget' || title.toLowerCase() === 'revenue') &&
    typeof newData === 'number' &&
    new Intl.NumberFormat('us', {
      style: 'currency',
      currency: 'USD',
    }).format(newData);

  const convertedData =
    title.toLowerCase() === 'runtime' &&
    typeof newData === 'number' &&
    newData > 0
      ? `${data}min`
      : (title.toLowerCase() === 'budget' ||
            title.toLowerCase() === 'revenue') &&
          typeof newData === 'number'
        ? currency
        : newData;

  return (
    <div className="mb-4 flex flex-col gap-1">
      <h4 className="text-base font-bold">{title}</h4>
      <span className="text-xs dark:text-slate-400">
        {typeof newData === 'number' || typeof newData === 'string'
          ? convertedData
          : newData.join(', ')}
      </span>
    </div>
  );
}

export default InfoItem;
