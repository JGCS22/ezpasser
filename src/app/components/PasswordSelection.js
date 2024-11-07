export default function PasswordSelection({ plist }) {
    return (
      <div className="flex border-2 justify-center items-center mx-96 my-10">
        <ul>
            {plist.map((item, index) => (
            <li className="border-8" key={index}>{item}</li> // Render each item as an <li> element
            ))}
        </ul>
      </div>
    );
  }