export interface UserProps {
  id: string;
  name: string;
  username: string;
  email: string;
  address?: AddressProps;
  phone?: string;
  website?: string;
  company?: CompanyProps;
}

interface AddressProps {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoProps;
}

interface GeoProps {
  lat: string;
  lng: string;
}

interface CompanyProps {
  name: string;
  catchPhrase: string;
  bs: string;
}
