import { getXataClient } from "../../../../../xata.js";

const connection = getXataClient();

// Fetch a Single User Credentials
export async function get_receivers() 
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
            let users = await connection.db.Dashboard.filter({UserType: 'Receiver'}).getAll();
            users = JSON.parse(users);

            if(users==undefined || users==null)
            {
                return {
                    'returncode': 400,
                    'message': "Empty.",
                    'output': []
                }
            }
            
            return {
                'returncode': 0,
                'message': 'Data Fetched',
                'output': users
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