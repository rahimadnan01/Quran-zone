export default function MenuItem({ icon, text }) {
  return (
    <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md cursor-pointer">
      {icon}
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}
