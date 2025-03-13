export default function Contact() {
    return (
      <div className="max-w-md mx-auto bg-white text-black p-6 rounded-md shadow-lg mt-12">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <form>
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input type="text" className="w-full border p-2 rounded-md" />
  
          <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">Email</label>
          <input type="email" className="w-full border p-2 rounded-md" />
  
          <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">Message</label>
          <textarea className="w-full border p-2 rounded-md" rows={4}></textarea>
  
          <button className="bg-primary text-white py-2 px-4 mt-4 rounded-md w-full">
            Send Message
          </button>
        </form>
      </div>
    );
  }
  