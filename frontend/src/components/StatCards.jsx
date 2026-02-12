export default function StatCards({ title, value, Icon }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
      
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-2xl font-bold">{value}</h2>
      </div>

      <div className="bg-purple-100 p-3 rounded-lg">
        <Icon className="text-purple-600"/>
      </div>

    </div>
  );
}
