import PasswordSelection from "./components/PasswordSelection";

export default function Home() {
  const items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Apple', 'Banana', 'Orange', 'Grapes', 'Apple', 'Banana', 'Orange', 'Grapes' , 'Apple', 'Banana', 'Orange', 'Grapes', 'Apple', 'Banana', 'Orange', 'Grapes'];

  return (
    <div>
      <PasswordSelection plist={items}/>
    </div>
  );
}

