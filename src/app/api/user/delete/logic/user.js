import { getXataClient } from "@/xata";

// Database Connection Pool
const connection = getXataClient();

// Fetch a Single User Credentials
export async function account_delete(data) 
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
            const user_id = data['user_id'];
            
            let user_check = await connection.db.Users.filter({id: user_id}).getAll();
            user_check = JSON.parse(user_check);

            // Check for UserId
            try
            {
                if(user_check[0].id==user_id)
                {
                    let user = await connection.db.Users.delete(user_id);
                    return {
                        'returncode': 0,
                        'message': "Account Deleted.",
                        'output': user
                    }
                }
    
            }
            catch(error)
            {
                return {
                    'returncode': 400,
                    'message': "Account Not Found.",
                    'output': []
                }
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