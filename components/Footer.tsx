export default function Footer() {
  return (
    <footer className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-xs">
          &copy;{new Date().getFullYear()} To the Moun. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
