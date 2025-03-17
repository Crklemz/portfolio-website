export default function Contact() {
  return (
    <div className="max-w-md mx-auto bg-white text-black p-6 rounded-md shadow-lg mt-12">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form>
        {/* Label and Input Fields */}
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input type="text" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />

        <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">Email</label>
        <input type="email" className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" />

        <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">Message</label>
        <textarea className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" rows={4}></textarea>

        {/* Use the global `.btn-primary` class */}
        <button className="btn-primary w-full mt-4">
          Send Message
        </button>
      </form>
    </div>
  );
}
