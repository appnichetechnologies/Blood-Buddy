
import { getXataClient } from "@/xata";
import bcrypt from 'bcrypt';

// Database Connection Pool
const connection = getXataClient();

// Fetch a Single User Credentials
export async function forget_password(data) 
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
            const username = data['username'];
            const password = data['password'];
            const new_password = data['new_password'];

            let user_check = await connection.db.Users.filter({Username: username}).getAll();
            user_check = JSON.parse(user_check);

            // Check for Username
            try
            {
                if(user_check[0].Username==username)
                {
                    const match = await bcrypt.compare(password, user_check[0].Password);
                    if(match)
                    {
                        const hashedPassword = await bcrypt.hash(new_password, 10);
                        const user = await connection.db.Users.update(user_check[0].id, {
                            Password: hashedPassword
                        });

            
                        return {
                            'returncode': 0,
                            'message': 'Password Changed.',
                            'output': user
                        }
                    }
                    else
                    {
                        return {
                            'returncode': 400,
                            'message': "Password doesn't Match.",
                            'output': []
                        }
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