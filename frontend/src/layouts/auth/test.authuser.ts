interface User {
  _id?: string;
  email?: string;
  userType?:
    | "user"
    | "hospital-admin"
    | "doctor"
    | "inventory-manager"
    | "receptionist";
  firstName?: string;
  lastName?: string;
}

// export const authUser = {
//     _id: 123,
//     userType: 'hospital-admin'
// }

// export const authUser = {
//     _id: 123,
//     userType: 'doctor'
// }

// export const authUser = {
//     _id: 123,
//     userType: 'inventory-manager'
// }


// export const authUser = {
//     _id: 123,
//     userType: 'patient'
// }

// export const authUser = {
//     _id: 123,
//     userType: 'receptionist'
// }

export const authUser: User | null = null;    