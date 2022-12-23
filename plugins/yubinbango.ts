interface ZipcodeAddress {
  region_id: number;
  region: string;
  locality: string;
  street: string;
  extended: string;
}
declare global {
  interface Window {
    YubinBango: any;
  }
}
const YubinBango = window.YubinBango || {};
export function fetchAddressByZipcode(zipcode: string): Promise<ZipcodeAddress> {
  return new Promise((resolve) => {
    return new YubinBango.Core(zipcode, (address: ZipcodeAddress) => {
      return resolve(address);
    });
  });
}
