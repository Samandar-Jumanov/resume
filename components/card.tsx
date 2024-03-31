

export default function Post({ title, content, imageUrl }) {
    return (
      <div className="max-w-md mx-auto bg-gray-800 text-white rounded-lg shadow-md overflow-hidden md:max-w-2xl m-4 dark:bg-gray-900">
        <img className="w-full h-64 object-cover" src={imageUrl} alt="Post" />
        <div className="p-6">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="mt-4">{content}</p>
        </div>
      </div>
    );
  }
  