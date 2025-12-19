'use client';

import LoaderSpinner from '@/components/loader/LoaderSpinner';
import useSWR from 'swr';

const Dashboard = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  );

  return (
    <div>
      {isLoading ? (
        <div className='h-screen flex items-center justify-center'>
          <LoaderSpinner />
        </div>
      ) : (
        <div className='flex flex-col gap-5'>
          {data.map((item) => (
            <div
              key={item.id}
              className='w-full h-30 border border-gray-500 rounded-md px-4 py-2'
            >
              <p className='text-2xl font-bold'>{item.title}</p>
              <p className='text-sm text-gray-500'>{item.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;

/*const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: { revalidate: 120 },
      });

      if (!res.ok) {
        setErr(true);
      }

      const data = await res.json();

      setData(data);
      setIsLoading(false);
    };

    getData();
  }, []);
  */
