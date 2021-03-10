import ItemList from './components/ItemList';
import SearchInput from './components/SearchInput';
import Buttons from './components/Buttons';
import DarkModeButton from './components/DarkModeButton';
import { useTodoContext } from './todo_context';

function App() {
  const { isDark } = useTodoContext();
  return (
    <div
      className={`${isDark ? 'bg-gray-700' : 'bg-gray-200'} h-screen text-left`}
    >
      <DarkModeButton />
      <SearchInput />
      <ItemList />
      <Buttons />
    </div>
  );
}

export default App;
