import { NextRequest, NextResponse } from "next/server";
import { sign_in } from "./logic/user";

export async function POST(request) 
{
    try
    {

        // For Authenticating a user
        const data = await request.json();

        const username = data['username'];
        const password = data['password'];

        if((username!=null || username!=undefined) && (password!=null || password!=undefined))
        {
            const user_auth_result = await sign_in(username, password); 
            if(user_auth_result.returncode==0)
            {
                
                return NextResponse
                .json(
                    {
                        'returncode': 0,
                        'message': 'User Authenticated',
                        'output': user_auth_result.output
                    },
                    {
                        status: 200,
                    });
            
            }
            else
            {
                return NextResponse
                .json(
                    {
                        'returncode': user_auth_result.returncode,
                        'message': user_auth_result.message,
                        'output': user_auth_result.output
                    },
                    {
                        status: user_auth_result.returncode,
                    });
            
            }
        }
        else
        {
            return NextResponse.json(
                {
                    'returncode': 400,
                    'message': 'Please enter a valid value of Username.',
                    'output': []
                },
                {
                    status: 400,
                });
        }
    }
    catch (error) 
    {
        return NextResponse.json(
            {
                'returncode': 400,
                'message': error.message,
                'output': []
            },
            {
                status: 400,
            });
    }
}