import { navigation } from "./layouts/Layout";

export default function App() {
  return navigation.map((item) => (
    <div key={item.key}>{item.component}</div>
  ))
}