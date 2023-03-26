import { BagSimple, Buildings, MapPin, UserCircle } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserProps } from '../@types/IUser';
import { api } from '../services/api';

export const UserDetails = () => {
  const [userDetails, setUserDetails] = useState<UserProps>();
  const { id } = useParams();
  const fetchUser = async () => {
    const { data } = await api.get(`users/${id}`);
    setUserDetails(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!userDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex items-center justify-center'>
      <div className='text-gray-200 flex flex-col items-start justify-between gap-5 w-[450px] bg-gray-600 rounded-md'>
        <header className='flex bg-gray-900 items-center justify-center w-full rounded-t-md'>
          <UserCircle size={90} weight='light' color='#49cdee' />
        </header>
        <div className='flex flex-col items-start justify-center gap-5 p-5 '>
          <div className='flex flex-col items-start justify-center'>
            <span>Name: {userDetails?.name}</span>
            <span>Username: {userDetails?.username}</span>
            <span>Email: {userDetails?.email}</span>
          </div>
          <div>
            <header className='text-xl flex items-start justify-start gap-2 my-2'>
              <MapPin size={25} color='#49cdee' />
              Address:
            </header>

            <ul className='flex flex-col items- justify-center'>
              <li> - Street: {userDetails?.address?.street}</li>
              <li> - Suite: {userDetails?.address?.suite}</li>
              <li> - City: {userDetails?.address?.city}</li>
              <li> - Zip Code: {userDetails?.address?.zipcode}</li>
              <li> - Lat: {userDetails?.address?.geo.lat}</li>
              <li> - Lng: {userDetails?.address?.geo.lng}</li>
            </ul>
          </div>
          <div>
            <header className='text-xl flex items-start justify-start gap-2 my-2'>
              <BagSimple size={25} color='#49cdee' />
              Portfolio:
            </header>

            <ul className='flex flex-col items- justify-center'>
              <li> - Phone: {userDetails?.phone}</li>
              <li> - Website: {userDetails?.website}</li>
            </ul>
          </div>
          <div>
            <header className='text-xl flex items-start justify-start gap-2 my-2'>
              <Buildings size={25} color='#49cdee' />
              Company:
            </header>

            <ul className='flex flex-col items- justify-center'>
              <li> - Name: {userDetails?.company?.name}</li>
              <li> - CatchPhrase: {userDetails?.company?.catchPhrase}</li>
              <li> - Bs: {userDetails?.company?.bs}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
