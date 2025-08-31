import { Creds } from "../../models/cred.model.js";
import { Hospitaldetails } from "../../models/hospitalinfo.model.js";

export async function loadUserInDB(payload, hashedPassword) {
  const { userType } = payload;
  
  try {
    const credsData = {
        email: payload.email,
        password: hashedPassword,
        userType: payload.userType
    }
    const creds = await Creds.create({
        ...credsData
    })
    
    if (userType === "hospital-admin") {
        const hospitalDetails = payload.hospitalInfo;
        const hospitalData = {
            ...hospitalDetails,
            credInfo: creds._id  
        }
        await Hospitaldetails.create({
            ...hospitalData
        })
    }

    const credsObject = creds.toObject();
    delete credsObject.password
    return credsObject;
  } catch (error) {
    throw new Error('Error loading the data in DB: ' + error.message);
  }
}
