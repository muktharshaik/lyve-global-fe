import { Restaurant } from 'types/dataTypes';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';

export default async function Index() {
  const response = await axios.get('http://localhost:3000/api/restaurants');
  const restaurants: Restaurant[] = response.data.data.restaurants;

  return (
    <div className="flex justify-center">
      <div className="w-[70%] mt-20 p-4 flex flex-wrap items-start gap-3">
        {restaurants.map((restaurant: Restaurant) => {
          return (
            <Link
              href={`/admin/add/${restaurant.id}`}
              key={restaurant.id}
              className="p-4 bg-slate-50 w-[47%] flex flex-col items-center gap-3 rounded-lg h-[160px] shadow-lg"
            >
              <div className="rounded-lg h-[150px]">
                <img
                  src={restaurant.image}
                  alt="some thing"
                  className="rounded-lg h-[100%]"
                />
              </div>
              <div className="w-[100%] h-[50%] flex justify-center items-center">
                <h5 className="text-xs font-bold text-center overflow-hidden">
                  {restaurant.name}
                </h5>
              </div>
            </Link>
          );
        })}
        <div className="p-4 bg-slate-50 w-[47%] flex justify-center items-center gap-3 rounded-lg h-[160px] shadow-lg">
          <Link href={`/admin/add`}>
            <AddIcon className="text-8xl text-slate-200" />
          </Link>
        </div>
      </div>
    </div>
  );
}
