import { getXataClient } from "../../../../../xata.js";

// Database Connection Pool
const connection = getXataClient();

// Fetch a Single User Credentials
export async function add_donators(data) 
{
    try
    {
        if(connection==undefined || connection==null)
        {
            return {
                'returncode': 404,
                'message': "Connection With Xata wasn't established.",
                'output': []
            }
        }

        try 
        {
            const name = data['name'];
            const email = data['email'];
            const contact = data['contact'];
            const medical_history = data['medical_history'];
            const blood_group = data['blood_group'];
            const user_type = data['user_type'];
            const message = data['message'];

            const user = await connection.db.Dashboard.create({
                Username: name,
                Email: email,
                Contact: contact,
                BloodGroup: blood_group,
                MedicalHistory: medical_history,
                Message: message,
                UserType: user_type,
              });

            return {
                'returncode': 0,
                'message': 'Thanks for Contacting us, we will contact as soon as possible.',
                'output': user
            }
        } 
        catch (error)
        {
            return {
                'returncode': 500,
                'message': error.message,
                'output': []
            }
        }

    }
    catch(error)
    {
        return {
            'returncode': 503,
            'message': error.message,
            'output': []
        }
    }
}