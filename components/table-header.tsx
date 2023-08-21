type TableHeaderProps = {
  data: string[];
};
export default function TableHeader({ data }: TableHeaderProps) {
  return (
    <thead className="bg-gray-50 rounded-md">
      <tr>
        {data.map((header) => (
          <th key={header} className="text-left py-3 px-5 font-semibold">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}
