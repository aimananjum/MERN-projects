import { useLoaderData } from "react-router-dom";

const GitHub = () => {
  // const [data, setData] = useState({});
  // useEffect(() => {
  //   fetch("https://api.github.com/users/aimananjum")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(data);
  //       setData(res);
  //     });
  // }, []);
  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers {data.followers}
    </div>
  );
};

export default GitHub;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/aimananjum");
  return res.json();
};
